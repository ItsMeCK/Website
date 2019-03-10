angular.module('khtmotors')
  .controller('mainCtrl',function ($scope, $http,$rootScope,$location) {
	console.log('home started');
	$scope.goToService = function(){		
		$location.path('services');		
	}
       $scope.bannerdata={};
              $scope.branddata={"brand":"KHT_Motors"};
                     console.log($scope.branddata);
                $http.post("https://kht-group-backend.myridz.com/website/banners_with_brand",$scope.branddata).success(
                    function(result) {
                        console.log(result);
                        $scope.bannerdata=result.web_banners;
                                                 
                    }).error(
                    function(err) {
                         $scope.loading = false;   
                    })
	/*$scope.goToServices = function(){
		$location.path("servicebooking");
	}
	$scope.goToTestDrive = function(){
		$location.path("testdrive");
	}
	$scope.goToInsurance = function(){
		$location.path("insurance");
	}
	$scope.goToPriceQuote = function(){
		$location.path("pricequote");
	}*/
	
	
	
});
