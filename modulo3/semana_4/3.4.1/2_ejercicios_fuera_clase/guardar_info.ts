import * as fs from 'fs';

export default function escribirArchivo(rutaArchivo: string, contenidoArchivo: string): void {
    fs.writeFile(rutaArchivo, contenidoArchivo,  function(err) {
        if (err) {
            return console.error(err);
        }
        console.log("Informacion Guardada con Exito!");
    });
}