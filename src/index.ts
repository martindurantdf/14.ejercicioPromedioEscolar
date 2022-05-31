/**
• Desarrolle un algoritmo que
permita cargar alumnos y sus
notas en los tres trimestres
• Se debe permitir obtener el
promedio anual (es decir, de sus
tres notas) de un alumno
(ingresado por el usuario)
 */

let alumnos: string[] = [];
let notas: number[][] = [];

//Funcion que busca el nombre del alumno y calcula su promedio anual
function buscarPromedioAnual(arrayAlumno: string[], arrayNotas: number[][]) {
  let nombreAlumno: string;
  let indiceAlumno: number;
  const trimestres: number = 3;
  let promedioAnual: number = 0;

  nombreAlumno = String(prompt("Ingrese el nombre del alumno para calular su promedio anual:"));
  indiceAlumno = arrayAlumno.indexOf(nombreAlumno);
  if (indiceAlumno !== -1) {
    for (let j = 0; j < trimestres; j++) {
      promedioAnual += arrayNotas[indiceAlumno][j];
    }
    console.log(`El promedio anual es ${(promedioAnual / trimestres).toFixed(2)}`);
  } else console.log("Nombre de alumno no encontrado");
}

//Funcion que carga las notas de un alumno en un arreglo bidimensional
function cargarNotas(arrayNotas: number[][]) {
  const trimestres = 3;
  let arrayTemportaldeNotas: number[] = new Array(trimestres);
  for (let i = 0; i < trimestres; i++) {
    arrayTemportaldeNotas[i] = Number(prompt(`Ingrese la nota del trimestre ${i + 1}`));
  }
  arrayNotas.push(arrayTemportaldeNotas);
  return arrayNotas;
}

//Funcion que carga los alumnos y llama a la funcion que carga sus notas
//Esto se repite hasta ingresar "Y" o "y"
function cargarAlumnos(arrayAlumno: string[], arrayNotas: number[][]) {
  let terminar: string;
  let alumno: string;
  do {
    alumno = String(prompt("Ingrese el nombre del alumno:"));
    arrayAlumno.push(alumno);
    cargarNotas(arrayNotas);
    terminar = String(prompt("Desea cargar otro alumno? Y/N"));
  } while (terminar === "y" || terminar === "Y");
   return arrayNotas;
  }

cargarAlumnos(alumnos, notas);
buscarPromedioAnual(alumnos, notas);
