﻿var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider.
      when('/', {
          templateUrl: 'app/shared/view/home.html',
          controller: 'HomeCtrl'
      }).
        when('/contact', {
            templateUrl: 'app/shared/view/contact.html',
            controller: 'CotactCtrl'
        }).
      when('/student', {
          templateUrl: 'app/component/student/view/index.html',
          controller: 'StudentCtrl'
      }).
    when('/student/edit/category/:id', {
        //templateUrl: 'app/component/student/view/edit.html',
        template:'<h1>Hello</h1>',
        controller: 'StudentEditCtrl'
    }).
      when('/register', {
          templateUrl: 'app/view/register.html',
          controller: 'RegisterCtrl'
      }).
      otherwise({
          redirectTo: '/'
      });
    $locationProvider.html5Mode(true);
}]);
