import AutoDeportivo from "./AutoDeportivo";

let miAuto: AutoDeportivo = new AutoDeportivo("Fiat", 600, "WQL824", 0);

miAuto.acelerar();
console.log(miAuto.getVelocidadActual());
console.log(miAuto);