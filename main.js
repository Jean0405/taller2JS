// ----------PUNTO 1------------
/*
const nombre = prompt("NOMBRE DEL ALUMNO")
const nota1 = parseFloat(prompt("NOTA 1"))
const nota2 = parseFloat(prompt("NOTA 2"))
const nota3 = parseFloat(prompt("NOTA 3"))

let promedio = (nota1 + nota2 + nota3) / 3;

(promedio <= 3.9) ? alert(`!${nombre} (${promedio}) estudie vago!`) : alert(`${nombre} (${promedio}) excelente rendimiento!`)
*/



// ---------PUNTO 2---------
/*
const num = parseInt(prompt('INGRESA UN NÚMERO'))
let resultado = num%2;
if (resultado == 0) {
    if (num > 10) {
        alert(`${num} es PAR y MAYOR que 10.`)
    }else{
        alert(`${num} es PAR y MENOR que 10.`)
    }

}else{
    if (num > 10) {
        alert(`${num} es IMPAR y MAYOR que 10.`)
    }else{
        alert(`${num} es IMPAR y MENOR que 10.`)
    }
}
*/

// ----------PUNTO 3----------
/*
const r = parseFloat(prompt('INTRODUCE LA RESISTENCIA'))
const i = parseFloat(prompt('INTRODUCE LA INTENSIDAD DE CORRIENTE'))

let v = i*r;

alert('El voltaje es: '+v);
*/


//----------PUNTO 4-----------

/*const n = parseInt(prompt("NÚMERO DE PERSONAS")); 
let personas = [];
let max = 0;
for (let i = 0; i < n; i++) {
    const nombre = prompt("NOMBRE");
    const edad = parseInt(prompt("EDAD"));

    if (edad > max) {
        max = edad;
        personas.unshift([nombre,edad]);
    }
}
alert(`La persona con la mayor edad es: ${personas[0][0]} con ${personas[0][1]} años.`)
*/


// -----------PUNTO 5----------
/*l
et num1 = parseInt(prompt('Ingresa el primer número'));
let num2 = parseInt(prompt('Ingresa el segundo número'));

let array = [num1,num2];

    if (num1 > num2) {
        alert(`Suma-> ${num1+num2} Resta-> ${num1-num2}`)
    }else{
        alert(`Producto-> ${num1*num2} Division-> ${num1/num2}`)
    }
*/



// ----------PUNTO 6-----------

// const N = parseInt(prompt('Número de estudiantes'));
// let M = 0;
// let F = 0;
// let alumno = [];

// for (let i = 0; i < N; i++) {
//     let nombre = prompt('Nombre alumno N°'+(i+1))
//     let sexo = prompt('Sexo alumno N°'+(i+1)+' (F o M)')
//     let nota = parseFloat(prompt('Nota alumno N°'+(i+1)))

//     alumno.push({
//         nombres:nombre,
//         sexos:sexo,
//         notas:nota
//     });
// }
// let maxNota = 0;
// let mayor;

// alumno.forEach(e => {
//     if (e.notas > maxNota) {
//         maxNota = e.notas;
//         mayor = {nombre:e.nombres, nota:e.notas}
//     }

//     if (e.sexos == 'f' || e.sexos =='F') {
//         F++;
//     }else{
//         M++;
//     }
// });

// alert(`La mayor nota la tiene ${mayor.nombre} con ${mayor.nota}.
// Hay ${M} hombres
// Hay ${F} mujeres.
// `)
