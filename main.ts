
import { Empleado } from './Empleado';
import { Cadena } from './Cadena';
import {Operaciones} from './Operaciones';
/*
let emps = new Array<Empleado>();
emps.push(new Empleado('Kervn',"Garcia",30.00));
emps.push(new Empleado('Kelvin',"Ventura",30.00));

for(let emp of emps){
    console.log(emp.getfullName);
}

emps.forEach(emp=>{
    console.log(emp);
});*/


//Cadenas
let a=new Cadena("anitalavalatina");
console.log(a.cadena);
console.log("Número de vocales "+a.getNumVocales);
console.log("Es palindromo "+a.getEsPalindromo);
a.setCadena="Hola son muchas cosas";
console.log(a.cadena);
console.log("Número de letras "+a.getNumLetras);
console.log("Número de palabras "+a.getNumPalabras);

//Operaciones
console.log("-------------------------------------------------------------------------------");
let b=new Operaciones(7,8);
console.log("Suma "+b.num1+" + "+b.num2+"="+b.getSuma);
console.log("Resta "+b.num1+" - "+b.num2+"="+b.getResta);
console.log("Factorial "+b.num1+" "+b.getFactorialN1);
console.log("Es primo "+b.num1+" "+b.getEsPrimoN1);
b.setNum1=4;
console.log("Suma "+b.num1+" + "+b.num2+"="+b.getSuma);
console.log("Resta "+b.num1+" - "+b.num2+"="+b.getResta);
console.log("Factorial "+b.num1+" "+b.getFactorialN1);
console.log("Es primo "+b.num1+" "+b.getEsPrimoN1);

//Código para compilar
//sudo npm install -g typescript

//hace la transpilación
//tsc archivo.ts --> transpila a ECMAS3
//tsc --target es5 Empleado.ts --> transpila a ECMAS5


