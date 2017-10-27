const decks = [{"id":"95571ea0-c798-42df-a071-28de93926193","displayName":"Aggro Vehicles","type":"deck","uri":"/api/decks/95571ea0-c798-42df-a071-28de93926193"},{"id":"ae7e5fa5-ccdd-459d-9967-5c555cce82b9","displayName":"U/G Crush","type":"deck","uri":"/api/decks/ae7e5fa5-ccdd-459d-9967-5c555cce82b9"},{"id":"57ed6868-18a4-4b90-9ba3-155036b25673","displayName":"A deck","type":"deck","uri":"/api/decks/57ed6868-18a4-4b90-9ba3-155036b25673"},{"id":"492a65cf-dd49-495e-bc8f-54b48055afdd","displayName":"Flip Lands","type":"deck","uri":"/api/decks/492a65cf-dd49-495e-bc8f-54b48055afdd"},{"id":"716e47e2-b494-4225-8693-d4d180729ca9","displayName":"Stormtide Leviathan","type":"deck","uri":"/api/decks/716e47e2-b494-4225-8693-d4d180729ca9"},{"id":"5e0fc21a-0acb-495b-9751-08d4e2140a04","displayName":"Example Deck","type":"deck","uri":"/api/decks/5e0fc21a-0acb-495b-9751-08d4e2140a04"},{"id":"932c9697-602d-43b0-9e2c-dbd05bf67a57","displayName":"Mini control","type":"deck","uri":"/api/decks/932c9697-602d-43b0-9e2c-dbd05bf67a57"},{"id":"bd55dc1b-2bb5-4394-9d48-a6edc819cf77","displayName":"Dickdeck","type":"deck","uri":"/api/decks/bd55dc1b-2bb5-4394-9d48-a6edc819cf77"}];

const deck1 = {"links":{"self":"/api/decks/ae7e5fa5-ccdd-459d-9967-5c555cce82b9"},"id":"ae7e5fa5-ccdd-459d-9967-5c555cce82b9","name":"U/G Crush","submittedBy":"phury","cards":["4 Anticipate","2 Blighted Woodland","4 Yavimaya Coast","4 Contingency Plan","4 Corrupted Grafstone","3 Crush of Tentacles","5 Forest","10 Island","4 Lumbering Falls","3 Nissa's Renewal","3 Part the Waterveil","4 Pieces of the Puzzle","2 Rise from the Tides","2 Seasons Past","4 Splendid Reclamation","2 Wildest Dreams"],"sideboard":null,"maybeboard":null};

const cards = [];

deck1.cards.forEach((elt) => {
  const space = elt.indexOf(" ");
  const numberOfCards = parseInt(elt.substring(0, space));
  const cardName = elt.substring(space+1, elt.length);
  const url = "https://api.magicthegathering.io/v1/cards?name="+cardName;
  $.getJSON(url, (data) => {
    console.log({ message: "Got response from "+url, payload: data });
    const card = data.cards.find((card) => {
      return card.imageUrl != null;
    });
  	card.amount = numberOfCards;
    cards.push(card);
    if (cards.length == deck1.cards.length) {
    	$('#cardGroubBy').trigger('change');
    }
  });
});

const CardRepository = {
	getCardByName: function(cardName) {
		const url = "https://api.magicthegathering.io/v1/cards?name="+cardName;
  	$.getJSON(url, (data) => {
      console.log({ message: "Got response from "+url, payload: data });
      return data.cards.find((card) => {
        return card.imageUrl != null;
      });
    });
  },
  
  listDecks: function() {
		const url = "http://manascrewd.herokuapp.com/api/users/phury/decks/";
  	$.getJSON(url, (data) => {
      console.log({ message: "Got response from "+url, payload: data });
      return data;
    });
  },
  
  listCards: function(deckId) {
  	deck1.cards.forEach((elt) => {
      const space = elt.indexOf(" ");
      const numberOfCards = parseInt(elt.substring(0, space));
      const cardName = elt.substring(space+1, elt.length);
      const card = this.getCardByName(cardName);
      card.amount = numberOfCards;
      return card;
    });
  }
}

$('#cardGroubBy').on('change', (evt) => {
  const grouping =  $('#cardGroubBy').val();
  $('#cardComponent')
  	.empty()
    .append(CardList(cards, grouping));
  $('a.preview').on('click', (evt) => {
  	preview($(evt.currentTarget).attr('href'));
    return false;
  });
});

function preview(image) {
  console.log('showing image '+image);
  $('#preview').css('background-image', 'url("'+image+'")');
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
      <a class="preview" href="`+card.imageUrl+`">`+card.name+`</a>
      <span class="mc">`+ManaLabel(card.manaCost)+`</span>
    </li>
  `;
}

function CardList(cards, grouping) {
	console.log('grouping by ' + grouping);
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
  const html = [];
  html.push('<h3>Cards</h3>');
  Object.keys(cardsGrouped).forEach((group) => {
  	html.push('<h5>'+group+' ('+cardsGrouped[group].length+')</h5>');
    html.push('<ul>');
  	cardsGrouped[group].forEach((card) => {
  		html.push(CardTile(card));
  	});
    html.push('</ul>');
  });
  return html.join('');
}

function DeckList(decks) {
  const html = [];
  html.push('<h3>Decks</h3>');
  html.push('<ul>');
  decks.forEach((deck) => {
  	html.push('<li><a class="show-deck" href="'+deck.id+'">'+deck.displayName+'</a></li>');
  });
  html.push('</ul>');
  return html.join('');
}

$('#deckListComponent')
  .empty()
  .append(DeckList(decks));
$('a.show-deck').on('click', (evt) => {
  evt.preventDefault();
  const cards = CardRepository.listCards($(evt.currentTarget).attr('href'));
  $('#cardComponent')
    .empty()
    .append(CardList(cards, grouping));
  $('a.preview').on('click', (evt2) => {
  	evt2.preventDefault();
    preview($(evt2.currentTarget).attr('href'));
  });
});
   
	

//$('#cardGroubBy').trigger('change');
