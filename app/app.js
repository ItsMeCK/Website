'use strict';

// Declare app level module which depends on views, and components
angular.module('khtmotors', ['ngRoute','ngStorage','naif.base64']).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
   $routeProvider
   	.when('/cars', {
        templateUrl: 'views/cars.html?v1.7',
        cache:false,
        controller: 'carsctrl'
      })
	.when('/accessories', {
        templateUrl: 'views/accessories.html?v1.7',
        cache:false,
        controller: 'accessoriesctrl'
    })
    	.when('/services', {
        templateUrl: 'views/services.html?v1.7',
        cache:false,
        controller: 'servicesctrl'
    })
    	.when('/testdrive', {
        templateUrl: 'views/testdrive.html?v1.7',
        cache:false,
        controller: 'testdrivectrl'
    })
    .when('/insurance', {
        templateUrl: 'views/insurance.html?v1.7',
        cache:false,
        controller: 'insurancectrl'
    })
    .when('/emicalculator', {
        templateUrl: 'views/emicalculator.html?v1.7',
        cache:false,
        controller: 'emicalculatorctrl'
    })
    .when('/pricequote', {
        templateUrl: 'views/pricequote.html?v1.7',
        cache:false,
        controller: 'pricequotectrl'
    })
    .when('/contactus', {
        templateUrl: 'views/contactus.html?v1.7',
        cache:false,
        controller: 'contactusctrl'
    })
    .when('/feedback', {
        templateUrl: 'views/feedback.html?v1.7',
        cache:false,
        controller: 'feedbackctrl'
    })
       .when('/locateus', {
        templateUrl: 'views/locateus.html?v1.7',
        cache:false,
        controller: 'locateusctrl'
    })
     .when('/careers', {
        templateUrl: 'views/careers.html?v1.7',
        cache:false,
        controller: 'careersctrl'
    })
       .when('/aboutus', {
        templateUrl: 'views/aboutus.html?v1.7',
        cache:false,
        controller: 'aboutusctrl'
    })
     .when('/myaccount', {
        templateUrl: 'views/myaccount.html?v1.7',
        cache:false,
        controller: 'myaccountctrl'
    })
      .when('/addmycar', {
        templateUrl: 'views/addmycar.html?v1.7',
        cache:false,
        controller: 'addmycarctrl'
    })
       .when('/mycarsdetail', {
        templateUrl: 'views/mycarsdetail.html?v1.7',
        cache:false,
        controller: 'mycarsctrl'
    })
      .when('/updatemycars', {
        templateUrl: 'views/updatemycars.html?v1.7',
        cache:false,
        controller: 'updatemycarsctrl'
    })
          .when('/profile', {
        templateUrl: 'views/profile.html?v1.7',
        cache:false,
        controller: 'profilectrl'
    })
         .when('/updateprofile', {
        templateUrl: 'views/updateprofile.html?v1.7',
        cache:false,
        controller: 'updateprofilectrl'
    })
      .when('/makepayment', {
        templateUrl: 'views/makepayment.html?v1.7',
        cache:false,
        controller: 'makepaymentctrl'
    })
      .when('/paymentdetail', {
        templateUrl: 'views/paymentdetail.html?v1.7',
        cache:false,
        controller: 'paymentdetailctrl'
    })
      .when('/cardetail', {
        templateUrl: 'views/cardetail.html?v1.7',
        cache:false,
        controller: 'cardetailctrl'
    })
	
 .otherwise({
        redirectTo: '/',
	   templateUrl : 'views/main.html?v1.7',
	   cache: false,
	   controller: 'mainCtrl'
      });
}]);
