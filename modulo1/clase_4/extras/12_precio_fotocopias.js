// 12. Una papelería debe imprimir una lista de los valores para diferentes cantidades de fotocopias a sacar. El precio unitario de cada fotocopia debe leerse. Imprimir un listado teniendo en cuenta que se tiene una política de descuento para cantidades que se obtengan del mismo original así el 12% para fotocopias entre 100 y 200, del 15% para fotocopias entre 201 y 400, y del 18% para fotocopias por cantidades mayores a 400.

let rls = require('readline-sync');

let precioUnitario = rls.questionFloat("Ingrese el precio unitario: ");
let precioUnitarioFinal;
for (let i = 1; i<=450;i++) {
    if (i<100) {
        precioUnitarioFinal = precioUnitario;
    } else if (i>=100 && i<=200) {            
        precioUnitarioFinal = precioUnitario*(1 - 0.12);
    } else if (i>200 && i<=400) {
        precioUnitarioFinal = precioUnitario*(1 - 0.15);
    } else if (i>400) {
        precioUnitarioFinal = precioUnitario*(1 - 0.18);
    }
    console.log(i + ' fotocopias = $' + (i*precioUnitarioFinal).toFixed(2));
}