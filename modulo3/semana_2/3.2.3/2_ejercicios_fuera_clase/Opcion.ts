// Documentacion de la Libreria usada https://www.npmjs.com/package/readline-sync

import * as readLine from './node_modules/readline-sync';

export default class Opcion {
    private border: boolean
    private color: string
    private borderColor: string
    private borderSymbol: string
    private sideSymbol: string
    private leftTopSymbol: string
    private leftBottomSymbol: string
    private rightTopSymbol: string
    private rightBottomSymbol: string
    private marginTop: number
    private marginBottom: number
    private paddingTop: number
    private paddingBottom: number

    constructor() {        
        this.color = this.opcionesColor("Seleccione un Color de Texto - ");
        if (this.opcionesSiNo("Creando Opcion:\nUsar Bordes?") === 1) {
            this.border = true;
            this.borderColor = this.opcionesColor("Seleccione un Color de Borde - ");
            if (this.opcionesSiNo("Usar Bordes Irregulares?") === 1) {
                this.sideSymbol = readLine.question("Ingrese un caracter para los laterales: ");
                this.leftTopSymbol = readLine.question("Ingrese un caracter para la esquina superior izquierda: ");
                this.rightTopSymbol = readLine.question("Ingrese un caracter para la esquina superior derecha: ");
                this.leftBottomSymbol = readLine.question("Ingrese un caracter para la esquina inferior izquierda: ");
                this.rightBottomSymbol = readLine.question("Ingrese un caracter para la esquina inferior derecha: ");
            } else {
                this.borderSymbol = readLine.question("Ingrese un caracter para usar todo el borde: ");
            }
        } else {
            this.border = false;
        }

        
        if (this.opcionesSiNo("Usar Margenes?") === 1) {
            this.marginTop = readLine.questionInt("Ingrese el margen superior: ");
            this.marginBottom = readLine.questionInt("Ingrese el margen inferior: ");
            this.paddingTop = readLine.questionInt("Ingrese el padding superior: ");
            this.paddingBottom = readLine.questionInt("Ingrese el padding inferior: ");

        } else {
            this.marginTop = 0;
            this.marginBottom = 0;
            this.paddingTop = 0;
            this.paddingBottom = 0;
        }
    }

    private opcionesColor(pregunta: string): string {
        let opcion: number = readLine.questionInt(pregunta+"1) Azul, 2) Amarillo, 3) Rojo, 4) Verde: ");
        if (opcion === 1) {
            return "blue"
        } else if (opcion === 2) {
            return "yellow"
        } else if (opcion === 3) {
            return "red"
        } else if (opcion === 4) {
            return "green"
        }
        return null;
    }
    private opcionesSiNo(pregunta: string): number {
        return readLine.questionInt(pregunta + "1) Si, 2) No: ");
    }
}