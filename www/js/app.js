// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app =angular.module('starter', ['ionic','ngCordova']);

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
}).config(function($compileProvider){
    $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
})
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider

            .state('home',{
                url:'/home',
                templateUrl: 'templates/home.html'

            })
            .state('location',{
                url:'/location',
                templateUrl:'templates/location.html',
                data:{
                    title:'Location'
                }
            })
            .state('addphotos',{
                url:'/addphotos',
                templateUrl:'templates/addphotos.html',
                data:{
                    title:'Add Photo'
                }
            })
            .state('details',{
                url:'/details',
                templateUrl:'templates/details.html',
                data:{
                    title:'Details'
                }
            });
        $urlRouterProvider.otherwise('/home');
    });
