angular.module('app').controller('lights', ['$scope', '$interval', function ($scope, $interval) {
    
    var cancel;
    $scope.isOn = false;
    
    $scope.start = function() {
        cancel = $interval(function() {
            
            $scope.isOn = !isOn;
        }, 2000);
    }

});
