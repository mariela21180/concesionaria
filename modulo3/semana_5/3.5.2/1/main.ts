import Kiosco from "./Kiosco";
import Producto from "./Producto";

let miKiosco = new Kiosco("Mariel Express");

miKiosco.cargarListaProductos("./listaProductos.txt");

console.log(miKiosco.getListaProductos());

let venta1 = new Producto(12,"Chicles Beldent",15,15);
let venta2 = new Producto(73,"Helado Frigor",25,50);
let venta3 = new Producto(900,"Invento",70,50);
try {
    miKiosco.vender(venta1);
} catch(err) {
    console.log(err.message);  
}
try {
    miKiosco.vender(venta2);
} catch(err) {
    console.log(err.message); 
}
try {
    miKiosco.vender(venta3);
} catch(err) {
    console.log(err.message); 
}

console.log(miKiosco.getListaProductos());
console.log(miKiosco.getListaVentas());
miKiosco.guardarListaVentas("./listaVentas.txt")