/**
*/

'use strict';

angular.module('myApp').controller('HomeCtrl', ['$scope', 'jrgArray', function($scope, jrgArray) {
	$scope.arr1 =[
		{_id:1, name:'Joe'},
		{_id:2, name:'Bob'},
		{_id:3, name:'Sally'},
		{_id:4, name:'Sue'},
		{_id:5, name:'Becky'}
	];
	$scope.index1 =jrgArray.findArrayIndex($scope.arr1, 'name', 'Bob', {});
	
	$scope.arrSorted =jrgArray.sort2D($scope.arr1, 'name', {});
	
	$scope.arrRemove =jrgArray.remove($scope.arr1, 1);
}]);