angular.module('userProfiles').controller('MainController', function($scope, mainService) {
	
	$scope.prev = function () {
		if ($scope.currentPage > 1){
			$scope.currentPage--;
			$scope.getUsers();
		}
	};
	$scope.next = function () {
		if ($scope.currentPage < $scope.maxPages){
			$scope.currentPage++;
			$scope.getUsers();
		}
	};
	$scope.currentPage = 1;
	
  $scope.getUsers = function() {
	  mainService.getUsers($scope.currentPage).then(function (response) {
		  $scope.users = response.data.data;
		  $scope.maxPages = response.data.total_pages
	  })
  };
	
  $scope.getUsers();

});