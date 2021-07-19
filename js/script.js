//creare un oggetto con  delle proprietà
const student = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    //concatena due proprietà dell'obbetto
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};

var getStudent = document.getElementById('students');

//accede all'oggetto selezionato
for (var key in student) {
    //stampa in pagina le proprietà dell'oggetto
    getStudent.innerHTML = 'Nome completo: ' + student.fullName() + '<br>' + 'Età: ' + student.age;;
}