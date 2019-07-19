export default class Matriz {
    private arreglo: string[][];

    constructor() {
        this.arreglo = new Array();        
    }

    public cargarMatriz(columna1: string, columna2:string): void {
        let aux: string[] = [
            columna1,
            columna2
        ];
        this.arreglo.push(aux);
    }

    public get(x: number, y:number): string {
        let filas: number = this.arreglo.length;
        let columnas: number = this.arreglo[0].length;
        if ( ( filas >= x) && ( columnas >= y )){
            return this.arreglo[x][y];
        } else {
            return "Los valores ingresados se encuentran fuera del rango de la matriz";
        }
    }
}