var app = angular.module('app', []);

app.controller('lights', ['$scope', '$interval', function ($scope, $interval) {
    
    var cancel;
    $scope.isOn = 0;
    $scope.radius = 50;
    
    $scope.start = function() {
        cancel = $interval(function() {

            if ($scope.isOn < 4)
                $scope.isOn = $scope.isOn + 1;
            else
                $scope.isOn = 1;
                
        }, 500);
    }

}]); 
