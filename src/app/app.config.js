export function routing($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise("/decks");
    $stateProvider
        .state('base', {
            url: '',
            abstract: true,
            template: '<div ui-view></div>'
        });
}
