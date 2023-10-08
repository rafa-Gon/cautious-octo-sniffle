

let entrada = prompt("Ingrese el usuario");

while(entrada != "Usuario"){
    alert("Usuario Incorrecto");

    entrada = prompt("Ingrese el usuario");

}

    alert("¡Bienvenido!");

let opcion = prompt(`
Ingrese la opcion Requerida
1. Ropa Mujer
2. Ropa Hombre
`);

switch (opcion){
    case "1":
        alert("Tenemos ropa, calsado accesorios");
        break;

        case "2":
            alert("Tenemos calsados y ropa")
            break;

            default:
                alert("Opcion Incorrecta")
                break;
}