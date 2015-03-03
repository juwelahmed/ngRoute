angular.module('app').controller('StudentEditCtrl', ['$scope', 'StudentService', '$routeParams', 'toaster', function ($scope, StudentService, $routeParams, toaster) {
    $scope.title = 'Edit Student';
    var id = $routeParams.id
    $scope.student = StudentService.getStudent(id);

    $scope.save = function () {
        toaster.pop('success', 'Confirmation', 'New record has been saved successfully.')
    }
}]);
