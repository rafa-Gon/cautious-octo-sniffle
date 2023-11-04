

// let entrada = prompt("Ingrese el usuario");

// while(entrada != "Usuario"){
//     alert("Usuario Incorrecto");

//     entrada = prompt("Ingrese el usuario");

// }

//     alert("¡Bienvenido!");

// let opcion = prompt(`
// Ingrese la opcion Requerida
// 1. Ropa Mujer
// 2. Ropa Hombre
// `);

// switch (opcion){
//     case "1":
//         alert("Tenemos ropa, calsado accesorios");
//         break;

//         case "2":
//             alert("Tenemos calsados y ropa")
//             break;

//             default:
//                 alert("Opcion Incorrecta")
//                 break;
// }

// for(let turno = 1; turno <= 3; turno++){
//     let nombre = prompt("Ingrese su Nombre");

//     alert(`Pagar en caja #${turno} Sr: ${nombre}`);
// }

// alert("Turnos terminados, por favor intentar mañana");


            //***** */ segunda pre-entrega


alert("Bienvenidos");

const productos = [
    { nombre: "Anis cartujo", precio: 2600},
    { nombre: "Casique 500", precio: 1880},
    { nombre: "Diplomatico", precio: 1320},
    { nombre: "Ron De Solera Santa Teresa 1796", precio: 1600},
    { nombre: "Ron Carupano 25 Años Single Barrel", precio: 19200},
];

let carrito = [];
let seleccion = prompt("Te ofrececemos nuestra seleccion especial, ¿deseas continuar?");

while (seleccion !== "si" && seleccion !== "no") {
    alert("Seleccione una opcion");
    seleccion = prompt("Te ofrececemos nuestra seleccion especial, ¿deseas continuar?")
}

if (seleccion === "si") {
    alert("Aquí te presentamos nuestra seleccion del día");
    let productoRon = productos.map((producto) => producto.nombre + " " + producto.precio + "$");
    alert(productoRon.join(" - "));
} else if (seleccion === "no") {
    alert("Gracias por visitarnos");
}

while (seleccion === "si") {
    let producto = prompt("Agregar producto al carrito: Anis cartujo, Cacique 500, Diplomatico, Ron De Solera Santa Teresa 1796, Ron Carupano 25 Años Single Barrel");
    let precio = 0;

    if (producto === "Anis cartujo" || producto === "Cacique 500" || producto === "Diplomatico" || producto === "Ron De Solera Santa Teresa 1796" || producto === "Ron Carupano 25 Años Single Barrel") {
        switch (producto) {
            case "Anis cartujo":
                precio = 2600;
                break;
            case "Cacique 500":
                precio = 1880;
                break;
            case "Diplomatico":
                precio = 1320;
                break;
            case "Ron De Solera Santa Teresa 1796":
                precio = 1600;
                break;
            case "Ron Carupano 25 Años Single Barrel":
                precio = 19200;
                break;
        }
        
         carrito.push({ nombre: producto, precio: precio });
        
        alert(producto + " se ha agregado al carrito");
    } else {
        alert("Producto no identificado. Intente de nuevo");
    }
    
    seleccion = prompt("¿Desea agregar otro producto al carrito? si o no");
}

if (carrito.length > 0) {
    let total = carrito.reduce((sum, product) => sum + product.precio, 0);
    alert("Carrito de compras:");
    carrito.forEach((item) => alert(item.nombre + " - Precio: " + item.precio + "$"));
    alert("Total a pagar: " + total + "$");
} else {
    alert("Gracias por visitarnos");
}