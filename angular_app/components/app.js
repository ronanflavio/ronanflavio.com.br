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
                value: _calculateAge(new Date('1987-03-12')),
            },
            {
                key: 'Telefone',
                value: '+55 31 98890-9120',
            },
            {
                key: 'Email',
                value: 'ronan@ronanflavio.com.br',
            },
            {
                key: 'Localização',
                value: 'Belo Horizonte, MG - Brasil',
            },
        ],
        skills: [
            'PHP',
            'Laravel',
            'Yii2',
            'AngularJS',
            'jQuery',
            'AJAX',
            'REST',
            'API',
            'JavaScript',
            'HTML5',
            'CSS3',
            'Git',
            'MVC',
            'MySQL',
            'Oracle',
        ]
    }
}]);

function _calculateAge(birthday) { // birthday is a date
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}
