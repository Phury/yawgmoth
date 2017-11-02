var decks = [],
    cards = [],
    grouping = 'type',
    currentDeck,
    mtgCardBack = 'https://magic.wizards.com/sites/mtg/files/image_legacy_migration/magic/images/mtgcom/fcpics/making/mr224_back.jpg',
    currentCard = mtgCardBack;

const CardRepository = {
  getCardByName: function(cardName, success) {
    const url = "https://api.magicthegathering.io/v1/cards?name="+cardName;
    $.getJSON(url, (data) => {
      console.log({ message: "Got response from "+url, payload: data });
      const card = data.cards.find((elt) => {
        return elt.imageUrl != null;
      });
      console.log({ message: "Found card "+card.name, payload: card });
      success(card);
    });
  },
  
  listDecks: function(success) {
    // Load yaml file
    $.get('data/decks.yaml', (yaml) => {
      decks = jsyaml.load(yaml).decks;
      console.log(decks);
      success(decks);
    });
  },
  
  getDeck: function(deckName) {
    const deck = decks.find((elt) => { return elt.name === deckName; });
    currentDeck = deck;
    return deck;
  },
  
  listCards: function(deckName, success) {
    const cards = [];
  	const cardStr = this.getDeck(deckName).cards;
    cardStr.forEach((elt) => {
      const space = elt.indexOf(" ");
      const numberOfCards = parseInt(elt.substring(0, space));
      const cardName = elt.substring(space+1, elt.length);
      this.getCardByName(cardName, (card) => {
        card.amount = numberOfCards;
        cards.push(card);
        if (cards.length == cardStr.length) {
          success(cards);
        }
      });
    });
  }
}

function CardPreview() {
  //$('#preview').css('background-image', 'url("'+image+'")');
  return `<img src="`+currentCard+`" />`;
}

function ManaLabel(str) {
	return (typeof(str) == "undefined") ? "" : str.split(/{(.*?)}/)
      .filter(str => { return str.trim() != ""; })
      .map((elt, i) => {
        const cost = elt.toLowerCase().replace('/', '');
        return `<i class="ms ms-cost ms-`+cost+`"></i>`;
      })
      .join('');
}

function CardTile(card) {
	return `
  	<li>
      `+card.amount+` <a class="preview" href="`+card.imageUrl+`">`+card.name+`</a>
      <span class="mc">`+ManaLabel(card.manaCost)+`</span>
    </li>
  `;
}

function CardList() {
  console.log('grouping by ' + grouping);
  console.log({ message: "cards", payload: cards });
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
  console.log(cardsGrouped);
  
  // Render items
  
  if (currentDeck == null) {
      return '<p>No deck selected</p>';
  }
  
  const html = [];
  html.push('<h3>'+currentDeck.name+'</h3>');
  Object.keys(cardsGrouped).forEach((group) => {
    const cards = cardsGrouped[group];
    html.push('<h5>'+group+' ('+cards.length+')</h5>');
    html.push('<ul>');
    cards.forEach((card) => {
        html.push(CardTile(card));
    });
    html.push('</ul>');
  });
  return html.join('');
}

function DeckList() {
  const html = [];
  html.push('<h3>Decks</h3>');
  html.push('<ul>');
  decks.forEach((deck) => {
  	html.push('<li><a class="show-deck" href="'+deck.name+'">'+deck.name+'</a></li>');
  });
  html.push('</ul>');
  return html.join('');
}

function YawgmothApp() {
  CardRepository.listDecks((data) => {
    decks = data;
    refresh();
    
    // Initialize handlers
    $('#cardGroubBy').on('change', (evt) => {
      grouping = $('#cardGroubBy').val();
      refresh();
    });
  });
  
  function refresh() {
    // Initialize components
    $('#deckListComponent')
      .empty()
      .append(DeckList());    
    
    $('#cardComponent')
      .empty()
      .append(CardList());
    
    $('#preview')
      .empty()
      .append(CardPreview());
    
    // Initialize handlers
    $('a.preview').on('click', (evt) => {
      evt.preventDefault();
      currentCard = $(evt.currentTarget).attr('href');
      refresh();
    });
    
    $('a.show-deck').on('click', (evt) => {
      evt.preventDefault();
      const deckName = $(evt.currentTarget).attr('href');
      CardRepository.listCards(deckName, (data) => {
        cards = data;
        currentCard = mtgCardBack;
        refresh();
      });
    });
  }
}

YawgmothApp();
