var app = angular.module('app', []);

app.controller('lights', ['$scope', '$interval', function ($scope, $interval) {
    
    var cancel;
    $scope.isOn = false;
    $scope.radius = 10;
    
    $scope.start = function() {
        cancel = $interval(function() {
            
            $scope.isOn = !isOn;
        }, 2000);
    }

}]); 
