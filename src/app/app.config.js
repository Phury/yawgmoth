export function routing($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise("/editor");
    $stateProvider
        .state('base', {
            url: '',
            abstract: true,
            template: '<div ui-view></div>'
        });
}
