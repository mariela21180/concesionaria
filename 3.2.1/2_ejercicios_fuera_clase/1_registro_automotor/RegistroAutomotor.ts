import Auto from './Auto';
import leerArchivo from './leer_info';

export default class RegistroAutomotor {
    private id: number
    private nombre: string
    private autos: Auto[]

    public constructor(id: number, nombre: string, autosTexto?: string) {
        this.id = id;
        this.nombre = nombre;
        if (autosTexto) {
            this.autos = this.cargarAutos(autosTexto);
        } else {
            this.autos = new Array<Auto>();
        }
    }

    public getId(): number {
        return this.id;
    }
    public getNombre(): string {
        return this.nombre;
    }

    /**
     * Carga de autos al registro a partir de un archivo de texto
     * @param autosTexto Es la ruta del archivo de texto a leer
     */
    cargarAutos(autosTexto: string): Auto[] {
        let autosString: string[];
        let aux: string[];
        let retorno: Auto[];
        autosString = leerArchivo(autosTexto);
        retorno = new Array();

        for (let i: number = 0; i<autosString.length; i++) {
            aux = autosString[i].split(',');
            let auto = new Auto(aux[0], aux[1], aux[2], parseInt(aux[3]), aux[4] );
            retorno.push(auto);
        }

        return retorno;
    }

    /**
     * Busca por patente en la lista del autos del registro.
     * @param patente La patente a buscar
     * @returns Si encuentra la patente, retorna el indice del auto, sino retorna -1.
     */
    private buscarPatente(patente: string): number {
        let indice: number = -1;
        for(let i: number = 0; i<this.autos.length; i++) {
            if (this.autos[i].getPatente() === patente) {
                indice = i;
            }
        };
        return indice;
    }

    agregarAuto(auto: Auto): void {
        if (this.buscarPatente(auto.getPatente()) === -1) {
            this.autos.push(auto);
        } else {
            console.log("Ya existe un auto con esa patente en este registro.");
        }
    }

    burcarAuto(patente: string): Auto {
        let indice: number = this.buscarPatente(patente);
        if ( indice === -1) {
            return null;
        } else {
            return this.autos[indice];
        }
    }

    borrarAuto(patente: string): void {
        let indice: number = this.buscarPatente(patente);
        if ( indice === -1) {
            console.log("No existe un auto con esa patente en este registro.");
        } else {
            this.autos.splice(indice, 1);
            console.log("Auto borrado.");
        }
    }

    actualizarAuto(patente: string, titular: string): void {
        let indice: number = this.buscarPatente(patente);
        if ( indice === -1) {
            console.log("No existe un auto con esa patente en este registro.");
        } else {
            if (titular) {
                this.autos[indice].setTitular(titular);
                console.log("Auto actualizado.");
            } else {                
                console.log("Debe ingresar el nombre del titular a actualizar.");
            }
        }
    }
}