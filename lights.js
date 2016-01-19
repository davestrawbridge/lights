var app = angular.module('app', []);

app.controller('lights', ['$scope', '$interval', function ($scope, $interval) {
    
    $scope.timer = null;
    $scope.radius = 50;

    $scope.blueOn = false;
    $scope.redOn = false;
    $scope.greenOn = false;
    $scope.yellowOn = false;

    $scope.isRunning = function () {
        return $scope.timer != null;
    }
    $scope.start = function() {
        
        if (!$scope.isRunning()) {
            $scope.blueOn = true;

            $scope.timer = $interval(function() {
                
                if ($scope.blueOn) {
                    $scope.blueOn = false;
                    $scope.redOn = true;
                } else if ($scope.redOn) {
                    $scope.redOn = false;
                    $scope.greenOn = true;
                } else if ($scope.greenOn) {
                    $scope.greenOn = false;
                    $scope.yellowOn = true;                }
                } else if ($scope.redOn) {
                    $scope.yellowOn = false;
                    $scope.blueOn = true;
                }

            }, 1000);
        }
    }
    
    $scope.stop = function() {
        if ($scope.isRunning())
        {
            $interval.cancel($scope.timer);
            $scope.timer = null;
        }
    }
    
}]); 
