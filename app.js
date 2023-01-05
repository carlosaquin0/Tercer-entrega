const inputSearch = document.querySelector("#inputSearch")
const tbody = document.querySelector("tbody")
const btnNuevo = document.querySelector(".button.button-outline")


//armar tabla
const armarTabla = (prod)=> {
    return `<tr>
                <td>${prod.nombre}</td>
                <td>${prod.precio}</td>
            </tr>`
}

const cargarProductos = (array)=> {
let tabla =""
if (array.length > 0) {
    array.forEach(prod => {
        tabla += armarTabla(prod)
    })
    tbody.innerHTML = tabla
}
}
cargarProductos(productos)

//Capturo la caja de busqueda

const filtrarProductos = ()=> {
    let parametro = inputSearch.value.trim().toUpperCase()
    let busqueda = productos.filter(prod => prod.nombre.includes(parametro))
        if (busqueda.length > 0) {
            cargarProductos(busqueda)
        }
}

inputSearch.addEventListener("search", filtrarProductos)

//capturar carrito falta finalizar
let boton = document.getElementById("btnPrincipal")
boton.addEventListener("click", capturar)
function capturar(){
    var nombreCapturar =document.getElementById(prod.nombre).value;
    var precioCapturar =document.getElementById(prod.precio).value;

    var chango = new productos(nombreCapturar,precioCapturar);
    console.log(chango)
}

let boton2 =document.getElementById("btnCalcular")
boton2.addEventListener("click", calcular)
function calcular(){
	//creacion de variables 
var montoIni =0;
var desc =0;
var impDesc = 0;
var total =0;

//capturo el valor de los input
montoIni = document.getElementById('montoInicial').value;
desc = document.getElementById('descuento').value;

//cálculo del descuento 
impDesc = (montoIni * desc)/100;

document.getElementById('importeDescontado').value=impDesc;

total = montoIni - impDesc
//Valor total
document.getElementById('total').value=total;
console.log(total);
}



//productos
/*
const carrito = [
    { id: "1010", nombre: "monitor19", precio: 30000},
    { id: "1030", nombre: "monitor22", precio: 33000},
    { id: "1842", nombre: "tv", precio: 65000},
    { id: "1747", nombre: "heladera", precio: 100000},
    { id: "1198", nombre: "cocina", precio: 60000},
]

//filtro de precios
let busqueda = carrito.filter((p) => p.precio<50000);
console.log(busqueda);

//filtro de monitor pulgadas
let busqueda2 = carrito.filter((p) => p.nombre === "monitor22");
console.log(busqueda2);
*/