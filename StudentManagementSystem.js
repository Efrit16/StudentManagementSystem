function add (number1, number2){
    return number1 + number2
};
add(1,2)

var numberofStudents = 0 ;
const students = [] ;
function addStudent (name) {

    numberofStudents = numberofStudents + 1 ;
    students.push(name);
}

function getNumberOfStudents () {

return numberofStudents;

}

