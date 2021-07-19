// ES 1

// //creare un oggetto con  delle proprietà
// const student = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 30,
//     //concatena due proprietà dell'obbetto
//     fullName: function () {
//         return this.firstName + " " + this.lastName;
//     }
// };

// var getStudent = document.getElementById('students');

// //accede all'oggetto selezionato
// for (var key in student) {
//     //stampa in pagina le proprietà dell'oggetto
//     getStudent.innerHTML = 'Nome completo: ' + student.fullName() + '<br>' + 'Età: ' + student.age;
// }


// ES 2


//creare un array di oggetti
const students = [
    student = {
        firstName: "John",
        lastName: "Doe",
        age: 30,
    },
    student = {
        firstName: "Tom",
        lastName: "Carter",
        age: 34,
    },
    student = {
        firstName: "Rick",
        lastName: "Stuart",
        age: 29,
    },
    student = {
        firstName: "Morty",
        lastName: "Komb",
        age: 26,
    },
    student = {
        firstName: "Zeb",
        lastName: "Dumb",
        age: 31,
    }
]

console.table(students);
console.log(students[1].firstName);

const getStudent = document.getElementById('students');


//ciclare l'array e stampare in pagina nome e cognome  degli studenti
for (var i = 0; i < students.length; i++) {
    getStudent.innerHTML += '<li>' + students[i].firstName + ' ' + students[i].lastName + '</li>';
}