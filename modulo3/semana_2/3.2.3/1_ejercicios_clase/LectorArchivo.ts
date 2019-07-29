import * as fs from 'fs';

export default class LectorArchivo {
    private archivo: string;
    private lineas: string[];

    constructor() {
        this.archivo = null;
        this.lineas = null;
    }

    public cargarArchivo(rutaArchivo: string): boolean {
        this.archivo = fs.readFileSync(rutaArchivo, 'utf8');
        if (this.archivo) {
            this.lineas = this.archivo.split('\n');
            this.lineas = this.lineas.map(linea => linea.replace('\r', ''));
            return true;
        }

        return false;
    } 

    public leerArchivo(): string[] {
        return this.lineas;
    } 
}