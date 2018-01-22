var app = angular.module('app',[]);

// app.config(($stateProvider,$urlRouteProvider)=>{

//     $urlRouteProvider.otherwise('/');

//     $stateProvider
//     .state(('login'),{
//         url:'/login',
//         templateUrl:'./partials/login.html',
//         controller:'loginController'
//     });
// });

app.controller('main-ctrl',($scope)=>{
    console.log('hello world');
});