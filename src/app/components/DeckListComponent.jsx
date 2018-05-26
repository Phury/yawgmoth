import React from 'react';
import DeckRepository from '../repositories/DeckRepository.jsx';

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
            <div id="deckListComponent" className="col l2 s4">
                <h3><i className="ss ss-wth"></i>{'\u00A0'}Decks</h3>
                <ul>
                    {this.state.decks.map((deck, i) => {
                        return (
                            <li key={i} className={this.props.selectedDeck && this.props.selectedDeck.name == deck.name ? "active" : ""}>
                                <a className="select-deck" href="#" onClick={(e) => this.props.onDeckSelected(e, deck)}>{deck.name}</a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default DeckListComponent;
