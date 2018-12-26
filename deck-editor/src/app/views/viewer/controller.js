import angular from "angular";
import template from './template.html';

let routing = ($stateProvider) => {
    $stateProvider
        .state('viewer', {
            parent: 'base',
            url: '/viewer/:deckIndex',
            controller: 'ViewerCtrl',
            controllerAs: 'ctrl',
            template: template
        });
};

class ViewerCtrl {
    constructor($scope) {
        this.$scope = $scope;
    }

    createSnapshot() {
        this.$scope.$broadcast('createSnapshot', {});
    }
}


export default angular.module('ksViewer', [])
    .config(routing)
    .controller('ViewerCtrl', ['$scope', ViewerCtrl])
    .name;
