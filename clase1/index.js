const alumnos = [
    { nombre: 'German David Neira Rivera', edad: 23 },
    { nombre: 'Santiago Pascual Plaus', edad: 32 },
    { nombre: 'Santiago Canosa', edad: 40 },
    { nombre: 'Francisco Campos', edad: 46 },
    { nombre: 'Daniel Andres Gallo Garcia', edad: 22 },
    { nombre: 'Juanse Calviño', edad: 28 },
    { nombre: 'Jorge Roldan', edad: 31 },
    { nombre: 'Leymar Gutierrez', edad: 42 },
    { nombre: 'Juan Jose Diaz', edad: 27 },
    { nombre: 'Matias Fernandez', edad: 29 },
    { nombre: 'Leandro Amaro', edad: 26 },
    { nombre: 'Franco Carini', edad: 31 },
    { nombre: 'Francisco Escobar Sabio', edad: 28 },
    { nombre: 'Pilar Castro', edad: 27 },
    { nombre: 'Sebastian Rodriguez', edad: 31 },
    { nombre: 'Carlos Martin Rodriguez', edad: 28 },
    { nombre: 'Pablo Aramayo', edad: 33 },
  ]
  
  // DISCLAIMER: La edad es ficticia y solo destinada para realizar los siguientes ejercicios
  
  // 1. Obtener un array de strings con solo nombres de cada alumno usando .map()
  
  // 2. Obtener un array con aquellos alumnos mayores a 30 años usando .filter()
  
  // 3. Obtener un entero con la edad total de todos los alumnos usando .reduce() (Investigar)
  
  // 4. Obtener en una constante la edad de "Leandro Amaro" usando .find() ( Investigar ) y destructuring del resultado
  
  // 5. Obtener en una constante primer alumno del array de alumnos usando destructuring y posteriormente en otra constante su nombre también
  
  // 6. Obtener un array con aquellos alumnos que empiezan con la letra "F", usando .filter()
  
  // 7. Obtener un array agregando una propiedad/key/atributo más a cada elemento usando .map()

  // 8. Obtener a partir de la constante en 3, el promedio de edad del curso dividiendo la misma por el total de alumnos

// 1.
const arrayNombres = alumnos.map(alumno => alumno.nombre)
console.log(arrayNombres)
// 2.
const mayoreAs30 = alumnos.filter(alumno => alumno.edad > 30)
console.log(mayoreAs30)
// 3.
const sumaDeEdades = alumnos.reduce((total,alumno) => total + alumno.edad , 0)
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
// 8.
const promedioEdad = sumaDeEdades / alumnos.length
console.log(promedioEdad)