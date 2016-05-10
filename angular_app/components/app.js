var app = angular.module('app', ['ngMaterial', 'ngMessages', 'ngRoute']);

app.config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('teal')
        .accentPalette('red');
});

app.controller('MainController', ['$scope', function ($scope) {
    $scope.isOpen = false;
    $scope.person = {
        attr: [
            {
                key: 'Nome',
                value: 'Ronan Flávio',
            },
            {
                key: 'Idade',
                value: '29',
            },
            {
                key: 'Telefone',
                value: '+55 31 98890-9120',
            },
            {
                key: 'Email',
                value: 'Ronan Flávio',
            },
            {
                key: 'Localização',
                value: 'Belo Horizonte, MG - Brasil',
            },
        ],
        skills: [
            'Laravel',
            'AngularJS',
            'jQuery',
            'AJAX',
            'REST',
            'JavaScript',
            'HTML5',
            'CSS3',
            'Git',
            'MVC',
            'MySQL'
        ]
    }
}]);
