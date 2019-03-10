angular.module('khtmotors')
  .controller('myaccountctrl',function ($scope, $http,$localStorage,$window,$timeout,$rootScope,$location) {
 $http.defaults.headers.common['X-USER-TOKEN']= $localStorage.ktmmotorusersession;
	$http.defaults.headers.common['X-USER-EMAIL']= $localStorage.ktmmotorusermail;
            $scope.myprofile = function(){
		$location.path('profile');		
	}
	$scope.editprofile = function(){
		$location.path('updateprofile');		
	}
    $scope.mycarsdetail = function(){
        console.log('in');
        $localStorage.ktmmotoraddcarservice=0;
        $localStorage.ktmmotoraddcarinsurance=0;
		$location.path('mycarsdetail');		
	}
    
      $scope.addmycar = function(){
        $localStorage.ktmmotoraddcarservice=0;
        $localStorage.ktmmotoraddcarinsurance=0;
		$location.path('addmycar');		
	}
        $scope.makepayment = function(){
		$location.path('makepayment');		
	}
          $scope.paymenthistory = function(){
		$location.path('myaccount');		
	}
                 $scope.paymentdetails = function(){
		$location.path('paymentdetail');		
	}
	
	
});