angular.module('app').controller('StudentCtrl', ['$scope', 'StudentService', function ($scope, StudentService) {
    $scope.title = 'Student';

    $scope.students = StudentService.getStudents();
}]);
