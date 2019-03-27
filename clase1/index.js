const alumnos = [
    {nombre: "German David Neira Rivera", edad:23},
    {nombre: "Santiago Pascual Plaus", edad:32},
    {nombre: "Santiago Canosa", edad:40},
    {nombre: "Francisco Campos", edad:46},
    {nombre: "Daniel Andres Gallo Garcia", edad:22},
    {nombre: "Juanse Calviño", edad:28},
    {nombre: "Jorge Roldan", edad:31},
    {nombre: "Leymar Gutierrez", edad:42},
    {nombre: "Juan Jose Diaz", edad:27},
    {nombre: "Matias Fernandez", edad:29},
    {nombre: "Leandro Amaro", edad:26},
    {nombre: "Franco Carini", edad:31},
    {nombre: "Francisco Escobar Sabio", edad:28},
    {nombre: "Pilar Castro", edad:27},
    {nombre: "Sebastian Rodriguez", edad:31},
    {nombre: "Carlos Martin Rodriguez", edad:28},
    {nombre: "Pablo Aramayo", edad:33},
]
// 1.
const arrayNombres = alumnos.map(alumno => alumno.nombre)
console.log(arrayNombres)
// 2.
const mayoreAs30 = alumnos.filter(alumno => alumno.edad > 30)
console.log(mayoreAs30)
// 3.
const sumaDeEdades = alumnos.map(alumno => alumno.edad).reduce((total,alumno) => total + alumno , 0)
console.log(sumaDeEdades)
// 4.
const {edad:edadLeandro} = alumnos.find(alumno => alumno.nombre === "Leandro Amaro")
console.log(edadLeandro)
// 5.
const [primerAlumno] = alumnos
const {nombre:nombrePrimerAlumno} = primerAlumno
console.log(primerAlumno)
console.log(nombrePrimerAlumno)
// 6.
const alumnosQueEmpiezanConF = alumnos.filter(alumno => alumno.nombre[0] === 'F')
console.log(alumnosQueEmpiezanConF)
// 7.
const alumnosConAsistencia = alumnos.map(alumno => {
    alumno.asistioUltimaClase = false
    return alumno
})
console.log(alumnosConAsistencia)