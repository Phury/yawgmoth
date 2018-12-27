import 'semantic-ui/dist/semantic.css';
import 'semantic-ui/dist/semantic.js';

import '../style/deck-list.css';
import '../style/app.css';
import 'mana-font/css/mana.css';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import restangular from 'restangular';

import { routing } from './app.config';

import uiService from './services/uiService';
import cardService from './services/cardService';
import deckService from './services/deckService';



/*
import deckform from './components/deckform/controller';
import editor from './views/editor/controller';
*/

import menu from './components/menu/controller';
import decklist from './components/decklist/controller';
import decklist2 from './components/decklist2/controller';
import deckshot from './components/deckshot/controller';

import deckList from './views/deckList/controller';
import deckDetail from './views/deckDetail/controller';
import visualViewer from './views/visualViewer/controller';

angular.module('kickstartNg', [uiRouter, restangular, menu, uiService, cardService, deckService, deckList, deckDetail, visualViewer, decklist, decklist2, deckshot])
    .constant('API_URL', 'https://api.magicthegathering.io/v1/')
    .config(routing)
    .config(['RestangularProvider', 'API_URL', (RestangularProvider, API_URL) => {
        RestangularProvider.setBaseUrl(API_URL);
    }]);