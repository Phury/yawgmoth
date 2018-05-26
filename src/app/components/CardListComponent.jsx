import React from 'react';
import CardRepository from '../repositories/CardRepository.jsx';
import FilterComponent from './FilterComponent.jsx';
import ManaCostLabel from './ManaCostLabel.jsx';

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
                // Make filter component collapsible
                //$('.collapsible').collapsible();
            });
    }

    render() {
        if (this.props.selectedDeck == null) {
            return (
                <div id="cardListComponent" className="col l8 s8">
                    <h3><i className="ss ss-bcore left"></i>Cards</h3>
                    <p>No deck selected</p>
                </div>
            );
        }

        if (this.state.isLoading) {
            return (
                <div id="cardListComponent" className="col l8 s8">
                    <h3><i className="ss ss-bcore left"></i>{this.props.selectedDeck.name}</h3>
                    <div className="center"><img className="spinner" src={this._spinner()} /></div>
                </div>
            );
        }

        return (
            <div id="cardListComponent" className="col l8 s8">
                <h3><i className="ss ss-bcore left"></i>{this.props.selectedDeck.name}</h3>
                <FilterComponent onGroupingChanged={this.props.onGroupingChanged} />
                <div className="card">
                    <div className="card-content">
                        <div className="decklist">
                            {Object.keys(this.state.cardsGrouped).map((group) => {
                                const cards = this.state.cardsGrouped[group];
                                return (
                                    <div key={group}>
                                        <h5>{group} ({cards.length})</h5>
                                        <ul>
                                            {cards.map((card, i) => {
                                                return (
                                                    <li key={i} className="item">
                                                        {card.amount}{'\u00A0'}
                                                        <a href={card.imageUrl}
                                                           className="select-card"
                                                           data-fancybox="deck"
                                                           data-caption={card.name} >
                                                            {card.name}
                                                        </a>
                                                        <span className="mc right"><ManaCostLabel manaCost={card.manaCost} /></span>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CardListComponent;
