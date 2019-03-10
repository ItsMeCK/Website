angular.module('khtmotors')
  .controller('headerCtrl',function ($scope, $http,$rootScope,$timeout,$localStorage, $location, $route, $anchorScroll) {
	console.log('Home Page');
    $location.path('main');	
    $scope.data={};
    $scope.login={};
    $scope.userdata={};
    $scope.username="";
    $scope.loginsession=true;
    $scope.loginvalid=false;
    console.log($localStorage.ktmmotoruserdata);
    if($localStorage.ktmmotoruserdata){
        console.log($scope.username);
        $scope.userid=$localStorage.ktmmotoruserdata;
        $scope.loginsession=false;
        $scope.loginvalid=true;
        $localStorage.ktmmotoruserid=$scope.userid.id;
       $scope.username=$localStorage.ktmmotorusername;
       }
     else{
         $scope.loginvalid=false;
         $scope.loginsession=true;
     }
     $scope.goToHome = function(){
        $("#hidenavbar").hide();
		$location.path('main');		
	}
	$scope.goToCars = function(){
        $("#hidenavbar").hide();
		$location.path('cars');		
	}
    $scope.goToAccessories = function(){
        $("#hidenavbar").hide();
		$location.path('accessories');		
	}
	
	$scope.goTonavbar = function(){
        $("#hidenavbar").show();
		$location.path('testdrive');		
	}
      $scope.myaccount = function(){
        $("#hidenavbar").hide();
		$location.path('myaccount');		
	}
        $scope.myprofile = function(){
        $("#hidenavbar").hide();
		$location.path('profile');		
	}
	
	$scope.goToLocateus = function(){
        $("#hidenavbar").hide();
		$location.path('locateus');
	}
    $scope.goToCareers = function(){
        $("#hidenavbar").hide();
		$location.path('careers');
	}
     $scope.goToAboutus = function(){
        $("#hidenavbar").hide();
		$location.path('aboutus');
	}
    $scope.normallogin = function(){
            $("#hidenavbar").hide();
          $scope.loginform.submitted = true;
          //$scope.submitted = true;
        	if ($scope.loginform.$invalid) {
				return false;
			}
       $scope.userdata={"session": {"email":$scope.login.email,"password": $scope.login.password}};
       console.log(JSON.stringify($scope.userdata));
            //return false;
             $http.post("https://kht-group-backend.myridz.com/website/sessions",$scope.userdata).success(
                    function(result) {
                        console.log(result);
                        var res=result; 
                        $scope.loginsession=false;
                        $scope.loginvalid=true;
                        $scope.users=result.user;
                        $scope.username=result.user.profile.full_name;
                        $localStorage.ktmmotoruserdata=result.user;
                        $localStorage.ktmmotoruserid=result.user.id;
                        $localStorage.ktmmotorusersession=result.user.authentication_token;
                        $localStorage.ktmmotorusername=result.user.profile.full_name;
                        $localStorage.ktmmotorusermail=result.user.profile.email;
                        $localStorage.ktmmotorprofileid=result.user.profile.id;
                        $('#myModal').modal('toggle');
                        $scope.successmessage="Successfully Logged in.";
                        $scope.Showsuccessalert = true;                         
                        $timeout(function() {$scope.Showsuccessalert = false;},3000);
                                
                    }).error(
                    function(err) {
                         $scope.loading = false;
                       
                    })
	}
        $scope.signup = function(){
        $("#hidenavbar").hide();
               $scope.signupform.submitted = true;
        	if ($scope.signupform.$invalid) {
				return false;
			}
       $scope.userdata={"user": {"name":$scope.data.name,"email":$scope.data.email,"password": $scope.data.password,"mobile": $scope.data.mobile,"social_login":0}};
       console.log(JSON.stringify($scope.userdata));
            //return false;
             $http.post("https://kht-group-backend.myridz.com/website/users",$scope.userdata).success(
                    function(result) {
                        console.log(result);
                        var res=result; 
                        $scope.dealerdata=result.dealers;
                        $('#myModal').modal('toggle');
                        $scope.successmessage="Registration Successful";
                        $scope.Showsuccessalert = true;                         
                        $timeout(function() {$scope.Showsuccessalert = false;},3000);
                                
                    }).error(
                    function(err) {
                         $scope.loading = false;
                       
                    })
	}
                        $scope.logout = function(){
                var userid=$localStorage.ktmmotoruserid;
                $http.delete("https://kht-group-backend.myridz.com/website/sessions/"+userid).success(
                    function(result) {
                        console.log("Logged Out");
                        $localStorage.ktmmotoruserdata="";
                        $localStorage.ktmmotoruserid="";
                        $localStorage.ktmmotorusername="";
                        $scope.loginsession=true;
                        $scope.loginvalid=false;  
                        $scope.successmessage="Logout Successful";
                        $scope.Showsuccessalert = true;                         
                        $timeout(function() {$scope.Showsuccessalert = false;},3000);
                    }).error(
                    function(err) {
                         $scope.loading = false;                       
                    })
                }
          $scope.forgotpassword = function(){
          $scope.forgotform.submitted = true;
        	if ($scope.forgotform.$invalid) {
				return false;
			}
       $scope.userdata={"email":$scope.forgot.email};
       console.log(JSON.stringify($scope.userdata));
             $http.post("https://kht-group-backend.myridz.com/website/passwords",$scope.userdata).success(
                    function(result) {
                        console.log(result);                 
                        $('#forgotpassword').modal('toggle');
                        $scope.successmessage="Reset link sent to you Email ID";
                        $scope.Showsuccessalert = true;                         
                        $timeout(function() {$scope.Showsuccessalert = false;},3000);
                                
                    }).error(
                    function(err) {
                         $scope.loading = false;
                       
                    })
	}
	
	
	$scope.scrollTo = function (id) {
		var old = $location.hash();
		$location.hash(id);
		$anchorScroll();
		$location.hash(old);
  	}

	
	
});
