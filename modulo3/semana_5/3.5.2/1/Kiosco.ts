import * as fs from "fs";
import Producto from "./Producto";

export default class Kiosco {
    private nombre: string;
    private listaProductos: Producto[] = [];
    private listaVentas: Producto[] = [];
    
    public constructor(nombre: string){
        this.nombre = nombre;
    }

    public cargarListaProductos(rutaArchivo: string) {
        let archivo: string = fs.readFileSync(rutaArchivo, 'utf8');
        let lineas: string[] = archivo.split("\n");
        lineas.map(linea => linea.replace("\r", ""));
        
        let aux: string[];

        for (let i:number=0; i<lineas.length; i++) {
            aux = lineas[i].split(",");
            let producto: Producto = new Producto(parseInt(aux[0]), aux[1], parseInt(aux[2]), parseInt(aux[3]));
            this.listaProductos.push(producto);
        }
    }

    public guardarListaVentas(rutaArchivo: string) {
        let ventasString: string = "";

        for (let i: number = 0; i<this.listaVentas.length; i++) {
            ventasString += this.listaVentas[i].toString();
            if (i<this.listaVentas.length-1) {
                ventasString += "\n";
            }
        }

        fs.writeFileSync(rutaArchivo, ventasString);
    }

    public getNombre(): string {
        return this.nombre;
    }
    public getListaProductos(): Producto[] {
        return this.listaProductos;
    }
    public getListaVentas(): Producto[] {
        return this.listaVentas;
    }

    public vender(producto: Producto) {
        let indice: number = this.buscarProducto(producto);
        if (indice === -1) {
            throw new Error("No existe el producto en Stock");
        } else {
            let aux = this.listaProductos[indice];
            if (aux.getCantidad() >= producto.getCantidad()) {
                aux.setCantidad( aux.getCantidad() - producto.getCantidad());
                this.listaVentas.push(producto);
                console.log("Venta realizada correctamente");
            } else {                
                throw new Error("No alcanza el Stock para realizar esa venta");
            }
        }
    }
    
    /**
     * Metodo privado para verificar si el producto existe en mi lista de Productos 
     * Si existe el producto retorna su posicion en el arreglo
     * Si no existe, retorna -1
     * @param producto 
     */
    private buscarProducto(producto: Producto): number {
        for (let i=0; i < this.listaProductos.length; i++) {
            let aux = this.listaProductos[i];
            if (producto.getId() === aux.getId()) {
                return i;
            }
        }
        return -1;
    }
}