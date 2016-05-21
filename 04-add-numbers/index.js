angular.module('AddNumbersApp', [])
   .controller('AddNumbersController', function($scope) {
        $scope.AddNumbers = function() {
            var a2 = Number($scope.a2 || 0);
            var b2 = Number($scope.b2 || 0);
            $scope.sum = a2 + b2;
        }
});

angular.module('MyApp', ['AddNumbersApp']);
