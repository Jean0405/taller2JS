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
/*
const N = parseInt(prompt('Número de estudiantes'));
let M = 0;
let F = 0;
let alumno = [];

for (let i = 0; i < N; i++) {
    let nombre = prompt('Nombre alumno N°'+(i+1))
    let sexo = prompt('Sexo alumno N°'+(i+1)+' (F o M)')
    let nota = parseFloat(prompt('Nota alumno N°'+(i+1)))

    alumno.push({
        nombres:nombre,
        sexos:sexo,
        notas:nota
    });
}
let maxNota = 0;
let mayor;

alumno.forEach(e => {
    if (e.notas > maxNota) {
        maxNota = e.notas;
        mayor = {nombre:e.nombres, nota:e.notas}
    }

    if (e.sexos == 'f' || e.sexos =='F') {
        F++;
    }else{
        M++;
    }
});

alert(`La mayor nota la tiene ${mayor.nombre} con ${mayor.nota}.
Hay ${M} hombres
Hay ${F} mujeres.
`)
*/



// ----------PUNTO 7-----------
/*
const articulo = prompt('Nombre del articulo');
const precio = parseFloat(prompt('Precio del articulo'));
const cantidad = parseFloat(prompt('Cantidad del producto'));


let precioPagar = precio*cantidad

alert(`
-----------ARTICULO------------
        ${articulo}
        ${articulo}
        ${precio}


-----PRECIO TOTAL A PAGAR------
        ${precioPagar}
`)
*/


// -------PUNTO 8-------
/*
const lado = parseFloat(prompt('Longitud del lado del cuadrado (metros)'));
const base = parseFloat(prompt('Base del triangulo'));
const altura = parseFloat(prompt('Altura del triangualo'));


let perimetro = lado*4;
let area = base*altura;

alert(`
    Perimetro del cuadrado: ${perimetro}m
    Área del triangulo: ${area}m2
`)
*/



// --------PUNTO 9--------
/*
const N = parseInt(prompt('Número de atletas participantes'));
let registro = [];
const record = 15.50;
for (let i = 0; i < N; i++) {
    let nombre = prompt('Nombre del atleta');
    let salto = parseFloat(prompt('Longitud del salto (Metros)'));
    
    registro.push({nombre,salto});
}

const ordenar = registro.sort((a,b)=>{
    return b.salto - a.salto;
})
if (ordenar[0].salto > record) {
    alert(`
    Ganadora: ${ordenar[0].nombre} con salto de ${ordenar[0].salto}m.
    ¡¡¡¡ROMPIO EL RECORD!!!
    `);
}else{
    alert(`
    Ganadora: ${ordenar[0].nombre} con salto de ${ordenar[0].salto}m.
    `); 
}
*/

// --------PUNTO 10--------
/*
let dato = parseInt(prompt('Ingresa el dato'))
let acumulador = 0;

while (dato != 0) {
    acumulador+=dato;
    dato = parseInt(prompt('Ingresa el dato'))
}
alert(`La sumatoria de los datos es: ${acumulador}`)
*/