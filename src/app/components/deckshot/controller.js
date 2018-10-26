import angular from 'angular';
import template from './template.html';

class DeckShotCtrl {
    constructor($scope, $timeout) {
        $scope.$on('createSnapshot', (event, deck) => {
            $timeout(() => { this.createSnapshot(); }, 500);

        });
    }

    createSnapshot() {
        html2canvas(document.querySelector("#deckList")).then(canvas => {
            document.querySelector("#deckCapture").appendChild(canvas);
            //document.body.appendChild(canvas);
        });
    }
}

export default angular.module('ksDeckShot', [])
    .controller('DeckShotCtrl', ['$scope', '$timeout', DeckShotCtrl])
    .component('ksDeckShot', {
        template: template,
        controllerAs: 'ctrl',
        controller: 'DeckShotCtrl'
    })
    .name;
