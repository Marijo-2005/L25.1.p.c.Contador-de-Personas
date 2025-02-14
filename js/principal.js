 /**
Sea el nombre y el sexo de varias personas (F-M). Se necesita un programa que lea estos
datos y reporte al final la cantidad de hombres y la cantidad de mujeres procesadas.
Se tienen las siguientes personas: Luisa, Ana, José, Carmen, Rosa, José, María, Luz, Rafael,
Liz, Marcos y Leo; la salida requerida presenta el siguiente formato:
Cantidad de personas: 12
Cantidad de hombres: 5
Cantidad de mujeres: 7
*/

import Cl_Conatdor from "./Cl_Contador.js";
import Cl_Persona from "./Cl_Persona.js";

let persona1 = new Cl_Persona("Luisa", "F");
let persona2 = new Cl_Persona("Ana", "F");
let persona3 = new Cl_Persona("Jose", "M");
let persona4 = new Cl_Persona("Carmen", "F");
let persona5 = new Cl_Persona("Rosa", "F");
let persona6 = new Cl_Persona("jose", "M");
let persona7 = new Cl_Persona("Maria", "F");
let persona8 = new Cl_Persona("Luz", "F");
let persona9 = new Cl_Persona("Rafael", "M");
let persona10 = new Cl_Persona("liz", "F");
let persona11 = new Cl_Persona("Marco", "M");
let persona12 = new Cl_Persona("Leo", "M");

let contador = new Cl_Conatdor
 
contador.procesarPersona(persona1);
contador.procesarPersona(persona2);
contador.procesarPersona(persona3);
contador.procesarPersona(persona4);
contador.procesarPersona(persona5);
contador.procesarPersona(persona6);
contador.procesarPersona(persona7);
contador.procesarPersona(persona8);
contador.procesarPersona(persona9);
contador.procesarPersona(persona10);
contador.procesarPersona(persona11);
contador.procesarPersona(persona12);

let salida = document.getElementById ("salida");
salida.innerHTML = `
Cantidad de personas: ${contador.cantidadPersonas()} <br>
Cantidad de hombres: ${contador.cantidadH()}<br>
Cantidad de mujeres: ${contador.cantidadM()}
`


