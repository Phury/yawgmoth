import jsyaml from 'js-yaml';

const DeckRepository = {
    listDecks: function() {
        const url = "./data/decks.yaml";
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
};

export default DeckRepository;
