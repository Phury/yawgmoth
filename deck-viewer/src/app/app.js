
import angular from 'angular';
import DeckService from './services/deckService';
import {navigationComponent} from './components/navigation/navigation';
import {footerComponent} from './components/footer/footer';
import {cardListComponent} from './components/cardList/cardList';
import {cvPage} from './pages/cv/cv';

import 'bulma/css/bulma.css';
import '../style/app.css';

const MODULE_NAME = 'app';

let appComponent = {
  template: require('./app.html'),
  controllerAs: 'app',
  controller: class AppCtrl {
    constructor() {
      this.url = 'https://github.com/preboot/angular-webpack';
    }
  }
};

angular.module(MODULE_NAME, [])
  .service('deckService', DeckService)
  .component('app', appComponent)
  .component('appNavigation', navigationComponent)
  .component('appFooter', footerComponent)
  .component('cardList', cardListComponent)
  .component('cvPage', cvPage);

export default MODULE_NAME;
