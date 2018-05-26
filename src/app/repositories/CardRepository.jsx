
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
};

export default CardRepository;

