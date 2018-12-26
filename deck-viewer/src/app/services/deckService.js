import angular from 'angular';

export default class DeckService {
  constructor() {
    console.log('deck service loaded');
    this.deck = {
      author: "Phury",
      title: "Jund ramp brawl",
      description: "A deck based on a jund ramp deck from channelfireball",
      pinned: "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=443081&type=card",
      cardList: [
        { cardName: "Beneath the Sands", amount: 1},
        { cardName: "Broken Bond", amount: 1},
        { cardName: "Cut", amount: 1},
        { cardName: "Duress", amount: 1},
        { cardName: "Eviscerate", amount: 1},
        { cardName: "Fiery Intervention", amount: 1},
        { cardName: "Fight with Fire", amount: 1},
        { cardName: "Golden Demise", amount: 1},
        { cardName: "Grow from the Ashes", amount: 1},
        { cardName: "Hour of Devastation", amount: 1},
        { cardName: "Hour of Promise", amount: 1},
        { cardName: "Star of Extinction", amount: 1},
        { cardName: "Sweltering Suns", amount: 1},
        { cardName: "Torment of Hailfire", amount: 1},
        { cardName: "Fiery Cannonade", amount: 1},
        { cardName: "Fungal Infection", amount: 1},
        { cardName: "Haze of Pollen", amount: 1},
        { cardName: "Lightning Strike", amount: 1},
        { cardName: "Magma Spray", amount: 1},
        { cardName: "Moment of Craving", amount: 1},
        { cardName: "Shivan Fire", amount: 1},
        { cardName: "Splendid Agony", amount: 1},
        { cardName: "Struggle", amount: 1},
        { cardName: "Torment of Venom", amount: 1},
        { cardName: "Unlicensed Disintegration", amount: 1},
        { cardName: "Vicious Offering", amount: 1},
        { cardName: "Canyon Slough", amount: 1},
        { cardName: "Cinder Barrens", amount: 1},
        { cardName: "Dragonskull Summit", amount: 1},
        { cardName: "Forest", amount: 6},
        { cardName: "Foul Orchard", amount: 1},
        { cardName: "Mountain", amount: 5},
        { cardName: "Painted Bluffs", amount: 1},
        { cardName: "Swamp", amount: 6},
        { cardName: "Arborback Stomper", amount: 1},
        { cardName: "Darigaaz Reincarnated", amount: 1},
        { cardName: "Shefet Monitor", amount: 1},
        { cardName: "The Scorpion God", amount: 1},
        { cardName: "Verdant Sun's Avatar", amount: 1},
        { cardName: "Wild Wanderer", amount: 1},
        { cardName: "Gift of Paradise", amount: 1},
        { cardName: "New Horizons", amount: 1},
        { cardName: "Sandwurm Convergence", amount: 1},
        { cardName: "Vance's Blasting Cannons", amount: 1},
        { cardName: "Vraska, Relic Seeker", amount: 1},
        { cardName: "Cultivator's Caravan", amount: 6}
      ],
      cards: [
        {
          type: "Commander",
          totalCards: 1,
          cards: {
            groups: [
              [
                "Darigaaz Reincarnated",
              ]
            ]
          }
        },
        {
          type: "Sorceries",
          totalCards: 13,
          cards: {
            groups: [
              [
                "Beneath the Sands",
                "Broken Bond",
                "Cut",
                "Duress",
                "Eviscerate"
              ],
              [
                "Fiery Intervention",
                "Fight with Fire",
                "Golden Demise",
                "Grow from the Ashes",
                "Hour of Devastation",
              ],
              [
                "Hour of Promise",
                "Star of Extinction",
                "Sweltering Suns",
                "Torment of Hailfire"
              ]
            ]
          }
        },
        {
          type: "Instants",
          totalCards: 12,
          cards: {
            groups: [
              [
                "Fiery Cannonade",
                "Fungal Infection",
                "Haze of Pollen",
                "Lightning Strike",
                "Magma Spray"
              ],
              [
                "Moment of Craving",
                "Shivan Fire",
                "Splendid Agony",
                "Struggle",
                "Torment of Venom"
              ],
              [
                "Unlicensed Disintegration",
                "Vicious Offering"
              ]
            ]
          }
        },
        {
          type: "Lands",
          totalCards: 22,
          cards: {
            groups: [
              [
                "Canyon Slough",
                "Cinder Barrens",
                "Dragonskull Summit",
                "Forest",
                "Foul Orchard"
              ],
              [
                "Mountain",
                "Painted Bluffs",
                "Swamp"
              ]
            ]
          }
        },
        {
          type: "Creatures",
          totalCards: 5,
          cards: {
            groups: [
              [
                "Arborback Stomper",
                "Shefet Monitor",
                "The Scorpion God",
                "Verdant Sun's Avatar",
                "Wild Wanderer"
              ]
            ]
          }
        },
        {
          type: "Enchantments",
          totalCards: 4,
          cards: {
            groups: [
              [
                "Gift of Paradise",
                "New Horizons",
                "Sandwurm Convergence",
                "Vance's Blasting Cannons"
              ]
            ]
          }
        },
        {
          type: "Planeswalkers",
          totalCards: 1,
          cards: {
            groups: [
              [
                "Vraska, Relic Seeker"
              ]
            ]
          }
        },
        {
          type: "Artifacts",
          totalCards: 1,
          cards: {
            groups: [
              [
                "Cultivator's Caravan"
              ]
            ]
          }
        }
      ]
    }
  }

  getDeckById(deckId) {
    return this.deck;
  }
}
