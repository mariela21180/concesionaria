import Monitor from "./Monitor";

// Probando Clase Monitor
console.log('Probando Clase Monitor');
console.log('Creando 1er monitor:');
let miMonitor = new Monitor(['HDMI1','HDMI2','VGA','USB1','USB2']);
console.log(miMonitor);
console.log('');

console.log('Creando 2do monitor:');
let miSegundoMonitor = new Monitor(['HDMI','USB']);
console.log(miSegundoMonitor);
console.log('');

console.log('Cambiando 1er monitor a fuente VGA y prendiendolo:');
miMonitor.cambiarFuente('VGA');
miMonitor.prenderApagar();
console.log(miMonitor);
console.log('');

console.log('Cambiando 2do monitor a fuente VGA y prendiendolo:');
miSegundoMonitor.cambiarFuente('VGA');
miSegundoMonitor.prenderApagar();
console.log(miSegundoMonitor);
console.log('');