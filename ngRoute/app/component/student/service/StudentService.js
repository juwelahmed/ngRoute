angular.module('app').factory('StudentService', function () {
    var factory = {}

    var students = [];
    factory.getStudents = function () {
        var student = new Student(1, 'Juwel Ahmed')
        students.push(student);
        student = new Student(1, 'Asraful Islam')
        students.push(student);
        student = new Student(1, 'Zillur Rahman')
        students.push(student);
        student = new Student(1, 'Azharul Islam')
        students.push(student);

        return students;
    }

    return factory;

})

function Student(id, name) {
    this.id = id;
    this.name = name;
}
