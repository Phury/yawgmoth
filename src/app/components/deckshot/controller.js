import angular from 'angular';
import html2canvas from 'html2canvas';
import template from './template.html';

class DeckShotCtrl {
	constructor($scope, $timeout) {
    this.snapshotCreated = false;
		this.$scope = $scope;
		$scope.$on('createSnapshot', (event, deck) => {
			$timeout(() => {
				this.createSnapshot();
			}, 500);
		});
	}

	$onInit() {
		this.deckIndex = this.$scope.$parent.ctrl.deckIndex;
	}

	createSnapshot() {
		html2canvas(document.querySelector("#deckList")).then(canvas => {
			document.querySelector("#deckCapture").appendChild(canvas);
			this.snapshotCreated = true;
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
