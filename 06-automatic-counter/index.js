angular.module('counterApp', [])
   .controller('CounterController', function($scope, $timeout) {
        $scope.counter = 0;
        var updateCounter = function () {
            $scope.counter++;
            $timeout(updateCounter, 1000);
        };
        updateCounter();
    });

angular.module('counterApp2', [])
   .controller('CounterController2', function($scope, $timeout) {
        var timer;
        $scope.counter2 = 0;
        $scope.stopCounter2 = function () {
            $timeout.cancel(timer);
            timer = null;
        }
        $scope.startCounter2 = function () {
            if (timer === null) {
                updateCounter2();
            }
        }
        var updateCounter2 = function () {
            $scope.counter2++;
            timer = $timeout(updateCounter2, 1000);
        };
        updateCounter2();
    });   

angular.module('myApp', ['counterApp', 'counterApp2']);
