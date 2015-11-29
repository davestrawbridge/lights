var app = angular.module('app', []);

app.controller('lights', ['$scope', '$interval', function ($scope, $interval) {
    
    $scope.timer = null;
    $scope.isOn = 0;
    $scope.radius = 50;
    
    $scope.isRunning = function () {
        return $scope.timer != null;
    }
    $scope.start = function() {
        
        if (!$scope.isRunning()) {
            $scope.timer = $interval(function() {

                if ($scope.isOn < 4)
                    $scope.isOn = $scope.isOn + 1;
                else
                    $scope.isOn = 1;

            }, 1000);
        }
    }
    
    $scope.stop = function() {
        if ($scope.isRunning())
        {
            $interval.cancel($scope.timer);
            $scope.isOn = 0;
            $scope.timer = null;
        }
    }

}]); 
