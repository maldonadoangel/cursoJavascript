const array = [1,2,3,4,5];


/* Como funciona la funcion .map */

//Funcion que retorne el valor del array pero con los valores multiplicados por 2
const duplicado = array.map((valor)=>{
    return valor * 2


});
//.map nos crea una copia del array original para que podamos manipularlo sin afectar el origen.
console.log(duplicado);
//Este es el array original
console.log(array);



/* EJemplo en la vida real */
/* Un profesor tiene que enviar una lista de estudiantes y nosotros tenemos que guardar */
/* esa lista de estudiante en nuestra base de datos con su email */
/* Tenemos que tomar en cuenta que tenemos que normalizar ese email para evitar errores */
/* TOdos los email tienen que estar en minuscula */
/* Tenemos que serializar los datos para poder tener los datos con las caracteristicas iguales */
/* Es organizar, cambiar los datos, arreglarlos para cuando lo guardemos en la bd se realizara de manera correcta */

const students = [
    {email: 'hola@GMAIL.com'},
    {email: 'chAo@gmail.com'},
    {email: 'Stephen@gmail.com'},
    {email: 'jonh@gmail.com'}
];

/* Serializamos */
const serializedStudent = student =>{
    student.email = student.email.toLocaleLowerCase();

    return student;
}

const serializedStudents = students.map(serializedStudent);

console.log(serializedStudents);
console.log(students);
