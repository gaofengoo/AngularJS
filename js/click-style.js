var app = angular.module("app", []);
app.controller("myCtrl", function($scope){
	$scope.lis = [
		{
			name:"1"
		},{
			name:"2"
		},{
			name:"3"
		},{
			name:"4"
		},{
			name:"5"
		},{
			name:"6"
		}
	];

	// 方法一
	$scope.liClick = function(i){
		$scope.selectLi = i;
	};

});