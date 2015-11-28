var app = angular.module('app', []);

app.controller('lights', ['$scope', '$interval', function ($scope, $interval) {
    
    var timer = null;
    $scope.isOn = 0;
    $scope.radius = 50;
    
    $scope.start = function() {
        
        if (timer == null) {
            timer = $interval(function() {

                if ($scope.isOn < 4)
                    $scope.isOn = $scope.isOn + 1;
                else
                    $scope.isOn = 1;

            }, 1000);
        }
    }
    
    $scope.stop = function() {
        if (timer != null)
        {
            $interval.cancel(timer);
            $scope.isOn = 0;
            timer = null;
        }
    }

}]); 
