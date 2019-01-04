import angular from 'angular';

class CardFilter {
	constructor() {
	}

	groupBy(cards, grouping) {
		switch (grouping) {
			case 'TYPE':
				return {
					creatures: cards.filter(card => card.type && card.type.indexOf("Creature") !== -1),
					instants: cards.filter(card => card.type && card.type.indexOf("Instant") !== -1),
					sorceries: cards.filter(card => card.type && card.type.indexOf("Sorcery") !== -1),
					artifacts: cards.filter(card => card.type && card.type.indexOf("Artifact") !== -1 && !card.type.indexOf("Creature") !== -1),
					lands: cards.filter(card => card.type && card.type.indexOf("Land") !== -1)
				};
			default:
				return {cards};
		}
	}
}

export default angular.module('cardFilter', [])
	.service('cardFilter', [CardFilter])
	.name;
