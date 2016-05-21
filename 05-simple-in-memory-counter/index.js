angular.module('CounterApp', [])
   .controller('CounterController', function($scope) {
        $scope.counter3 = 0;
        $scope.decrement = function() {
            $scope.counter3--;
        }
});

angular.module('MyApp', ['CounterApp']);
