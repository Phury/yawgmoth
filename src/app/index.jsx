import 'bootstrap';
import 'mana-font';
import 'keyrune';
//import 'bootstrap/dist/css/bootstrap.min.css';


import React from 'react';
import {render} from 'react-dom';
import NavigationComponent from './components/NavigationComponent.jsx';
import DeckListComponent from './components/DeckListComponent.jsx';
import CardListComponent from './components/CardListComponent.jsx';

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
                <NavigationComponent />
                <main className="row">
                    <DeckListComponent
                        onDeckSelected={this.onDeckSelected}
                        selectedDeck={this.state.selectedDeck} />
                    <CardListComponent
                        onCardSelected={this.onCardSelected}
                        onGroupingChanged={this.onGroupingChanged}
                        grouping={this.state.grouping}
                        selectedDeck={this.state.selectedDeck} />
                </main>
            </div>
        );
    }
}

render(<YawgmothApp />, document.getElementById("app"));

function jqueryHandle() {
}