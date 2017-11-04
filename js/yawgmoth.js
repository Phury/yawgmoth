const DeckRepository = {
  listDecks: function() {
    const url = "data/decks.yaml";
    return fetch(url)
      .then((response) => {
        if (response.ok) {
          //console.log({ message: "Got response from "+url, payload: response });
          return response
            .text()
            .then((text) => {
              // Load yaml file
              const decks = jsyaml.load(text).decks;
              //console.log({ message: "yaml loaded", payload: decks });
              return decks;
            });
        } else {
          throw new Error("error calling url "+ url + " got response status " + response.status);
        }
      });
  }
}

const CardRepository = {
  getCardByName: function(cardName) {
    const url = "https://api.magicthegathering.io/v1/cards?name=\""+cardName+"\"";
    return fetch(url)
      .then((response) => {
        if (response.ok) {
          //console.log({ message: "Got response from "+url, payload: response });
          return response
            .json()
            .then((data) => {
              const card = data.cards.find((elt) => { return elt.imageUrl != null; });
              console.log({ message: "Card "+card.name, payload: card });
              return card;
            });
        } else {
          throw new Error("error calling url "+ url + " got response status " + response.status);
        }
      });
  },
  
  listCards: function(deck) {
    return new Promise((resolve, reject) => {
      if (deck == null) resolve([]);
      
      const promises = [];
      deck.cards.map((elt, i) => {
        const space = elt.indexOf(" ");
        const numberOfCards = parseInt(elt.substring(0, space));
        const cardName = elt.substring(space+1, elt.length);
        promises.push(
          CardRepository.getCardByName(cardName)
            .then(data => {
              data.amount = numberOfCards;
              return data;
            })
            .catch(error => {
              console.log(error+": could not retrieve card "+cardName);
              return {amount: numberOfCards, name: cardName, manaCost: "", convertedManaCost: 0, links: {}};// TODO: Handle null fields in CardInfoComponent to be more robust
            })
        );
      });
      Promise.all(promises).then((cards) => {
        resolve(cards);
      }, error => {
        reject(error+": could not retrieve cards in deck "+deck.name);
      });
    });
  }
}

class ManaCostLabel extends React.Component {
  
  render() {
    return (typeof(this.props.manaCost) == "undefined") ? null : this.props.manaCost.split(/{(.*?)}/)
      .filter(str => { return str.trim() != ""; })
      .map((elt, i) => {
        const cost = elt.toLowerCase().replace('/', '');
        return (<i key={i} className={"ms ms-cost ms-"+cost}></i>);
      });
  }
}


class Navigation extends React.Component {
  
  render() {
    return (
      <header id="navigation" className="navbar-fixed">
        <nav>
          <div className="nav-wrapper blue">
            <a href="#" className="brand-logo"><i className="ss ss-nph left"></i>Yawgmoth</a>
          </div>
        </nav>
      </header>
    );
  }
}
  
class FilterComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 'type' };
  }
  
  render() {
    return (
      <div className="">
        <label htmlFor="cardGroubBy">Group by</label>
        <select 
            id="cardGroubBy" 
            className="browser-default" 
            onChange={(e) => {
              this.setState({ value: e.target.value });
              this.props.onGroupingChanged(e, e.target.value);
            }} 
            value={this.state.value}>
          <option value="type">Type</option>
          <option value="color">Color</option>
          <option value="cmc">Cmc</option>
        </select>
      </div>
    );
  }
}

class DeckListComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { decks: [] };
  }
  
  componentDidMount() {
    DeckRepository
      .listDecks()
      .then((data) => {
        this.setState({ decks: data });
      });
  }
  
  render() {
    if (this.state.decks == null) return null;
    
    return (
      <div id="deckListComponent" className="dragend-page col l3">
        <h3><i className="ss ss-wth left"></i>Decks</h3>
        <ul className="">
          {this.state.decks.map((deck, i) => {
            return (
              <li key={i} className="">
                <a className="select-deck" href="#" onClick={(e) => this.props.onDeckSelected(e, deck)}>{deck.name}</a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

class CardListComponent extends React.Component {
  _spinner() {
    const spinners = ["angel", "embalmed", "exerted", "goat", "knight ally", "soldier", "squirrel", "thopter", "angel"];
    return "img/tokens/" + spinners[Math.floor(Math.random()*spinners.length)] + ".gif";
  } 
  
  _groupCards(cards, grouping) {
    //console.log(cards);
    var cardsGrouped;
    switch (grouping) {
      default:
      case 'type':
          cardsGrouped = cards.reduce((acc, card) => {
          acc[card.types[0]] = acc[card.types[0]] || [];
          acc[card.types[0]].push(card);
          return acc;
        }, []);
        break;
      case 'color':
          cardsGrouped = cards.reduce((acc, card) => {
          const color = card.colors == null ? 'Colorless' : card.colors.length > 1 ? 'Gold' : card.colors[0];
          acc[color] = acc[color] || [];
          acc[color].push(card);
          return acc;
        }, []);
        break;
      case 'cmc':
          cardsGrouped = cards.reduce((acc, card) => {
          acc[card.cmc] = acc[card.cmc] || [];
          acc[card.cmc].push(card);
          return acc;
        }, []);
        break;
    }
    return cardsGrouped;
  }
  
  constructor(props) {
    super(props);
    this.state = { cards: [], cardsGrouped: [], isLoading: true };
  }
  
  componentWillReceiveProps(nextProps) {
    // user changed the grouping
    if (nextProps.grouping != this.props.grouping) {
      this.setState({ cardsGrouped: this._groupCards(this.state.cards, nextProps.grouping), isLoading: false });
      return;
    }
    
    // user clicked on the same deck, do not update
    if (nextProps.selectedDeck == null || nextProps.selectedDeck == this.props.selectedDeck) {
      return;
    }
      
    // user clicked on a new deck
    
    // show spinned while waiting for the cards to load
    this.setState({ cards: [], isLoading: true });
    
    // load the cards to show
    CardRepository
      .listCards(nextProps.selectedDeck)
      .then((data) => {
        this.setState({ cards: data, cardsGrouped: this._groupCards(data, nextProps.grouping), isLoading: false });
      });
  }
  
  render() {
    if (this.props.selectedDeck == null) {
      return (
        <div id="cardListComponent" className="dragend-page col l6">
          <h3><i className="ss ss-bcore left"></i>Cards</h3>
          <p>No deck selected</p>
        </div>
      );
    }
    
    if (this.state.isLoading) {
      return (
        <div id="cardListComponent" className="dragend-page col l6">
          <h3><i className="ss ss-bcore left"></i>{this.props.selectedDeck.name}</h3>
          <div className="center"><img className="spinner" src={this._spinner()} /></div>
        </div>
      );
    }

    return (
      <div id="cardListComponent" className="dragend-page col l6">
        <h3><i className="ss ss-bcore left"></i>{this.props.selectedDeck.name}</h3>
        <FilterComponent onGroupingChanged={this.props.onGroupingChanged} />
        {Object.keys(this.state.cardsGrouped).map((group) => { 
          const cards = this.state.cardsGrouped[group];
          return (
            <div key={group}>
              <h5>{group} ({cards.length})</h5>
              <ul className="collection">
                {cards.map((card, i) => { 
                  return (
                    <li key={i} className="collection-item">
                      {card.amount +" "}<a className="select-card" href="#" onClick={(e) => this.props.onCardSelected(e, card)}>{card.name}</a>
                      <span className="mc right"><ManaCostLabel manaCost={card.manaCost} /></span>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    );
  }
}

class CardPreviewComponent extends React.Component {
  
  _defaultImageUrl = 'https://magic.wizards.com/sites/mtg/files/image_legacy_migration/magic/images/mtgcom/fcpics/making/mr224_back.jpg'
  
  constructor(props) {
    super(props);
    this.state = { imageUrl: this._defaultImageUrl, isLoading: true };
  }
  
  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedCard == null || nextProps.selectedCard == this.props.selectedCard) return;
    this.setState({ imageUrl: nextProps.selectedCard.imageUrl, isLoading: false });
  }
  
  render() {
    return (
      <div id="cardPreviewComponent" className="dragend-page col l3">
        <h3><i className="ss ss-pbook left"></i>Detail</h3>
        <img className="card-preview" src={this.state.imageUrl} />
      </div>
    );
  }
}

class YawgmothApp extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { selectedDeck: null, selectedCard: null, grouping: "type" };
    
    // Event handler bindings
    this.onDeckSelected = this.onDeckSelected.bind(this);
    this.onCardSelected = this.onCardSelected.bind(this);
    this.onGroupingChanged = this.onGroupingChanged.bind(this);
  }
  
  onDeckSelected(e, selectedDeck) {  
    e.preventDefault();
    if (this.state.selectedDeck != selectedDeck) {
      this.setState({ selectedDeck: selectedDeck });
    }
  }
  
  onCardSelected(e, selectedCard) {  
    e.preventDefault();
    if (this.state.selectedCard != selectedCard) {
      this.setState({ selectedCard: selectedCard });
    }
  }
  
  onGroupingChanged(e, grouping) {
    //const grouping = e.target.value;
    console.log(grouping);
    e.preventDefault();
    if (this.state.grouping != grouping) {
      this.setState({ grouping: grouping });
    }
  }
  
  componentDidMount() {
  }
    
  render() {
    return (
      <div id="yawgmoth">
        <Navigation />
        <main id="dragend" className="row">
          <DeckListComponent 
            onDeckSelected={this.onDeckSelected}/>
          <CardListComponent 
            onCardSelected={this.onCardSelected} 
            onGroupingChanged={this.onGroupingChanged} 
            grouping={this.state.grouping}
            selectedDeck={this.state.selectedDeck} />
          <CardPreviewComponent 
            selectedCard={this.state.selectedCard} />
        </main>
      </div>
    );
  }
}

ReactDOM.render(
  <YawgmothApp />,
  document.getElementById("app")
);

function jqueryHandle() {
}