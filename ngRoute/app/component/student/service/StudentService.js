angular.module('app').factory('StudentService', function () {
    var factory = {}

    
    factory.getStudents = function () {
        var students = [];
        var student = new Student(1, 'Juwel Ahmed')
        students.push(student);
        student = new Student(2, 'Asraful Islam')
        students.push(student);
        student = new Student(3, 'Zillur Rahman')
        students.push(student);
        student = new Student(4, 'Azharul Islam')
        students.push(student);

        return students;
    }

    return factory;

})

function Student(id, name) {
    this.id = id;
    this.name = name;
}
