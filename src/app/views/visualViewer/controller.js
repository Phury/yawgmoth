import angular from "angular";
import template from './template.html';

let routing = ($stateProvider) => {
	$stateProvider
		.state('viewer', {
			parent: 'base',
			url: '/visualViewer/:deckIndex',
			controller: 'VisualViewerCtrl',
			controllerAs: 'ctrl',
			template: template
		});
};

class VisualViewerCtrl {
	constructor($scope, $stateParams) {
		this.$scope = $scope;
		this.deckIndex = $stateParams.deckIndex;
	}

	createSnapshot() {
		this.$scope.$broadcast('createSnapshot', {});
	}
}


export default angular.module('ksVisualViewer', [])
	.config(routing)
	.controller('VisualViewerCtrl', ['$scope', '$stateParams', VisualViewerCtrl])
	.name;
