import leerArchivo from './leer_info';
import Automotor from './Automotor';
import Auto from './Auto';
import Moto from './Moto';
import Camion from './Camion';

export default class RegistroAutomotor {
    private id: number
    private nombre: string
    private automotores: Automotor[]

    public constructor(id: number, nombre: string, automotoresTexto?: string) {
        this.id = id;
        this.nombre = nombre;
        if (automotoresTexto) {
            this.automotores = this.cargarAutomotores(automotoresTexto);
        } else {
            this.automotores = new Array<Automotor>();
        }
    }

    public getId(): number {
        return this.id;
    }
    public getNombre(): string {
        return this.nombre;
    }
    /**
     * Carga de automotores al registro a partir de un archivo de texto
     * @param automotoresTexto Es la ruta del archivo de texto a leer
     */
    public cargarAutomotores(automotoresTexto: string): Automotor[] {
        let automotoresString: string[];
        let aux: string[];
        let retorno: Automotor[];
        automotoresString = leerArchivo(automotoresTexto);
        retorno = new Array();

        for (let i: number = 0; i<automotoresString.length; i++) {
            aux = automotoresString[i].split(',');
            let automotor: Automotor;
            if (aux[6]) {
                automotor = new Auto(aux[0], aux[1], aux[2], parseInt(aux[3]), aux[4], aux[5], parseInt(aux[6]), parseInt(aux[7]), parseInt(aux[8]) );
            } else if (aux[9]) {
                automotor = new Moto(aux[0], aux[1], aux[2], parseInt(aux[3]), aux[4], aux[5], parseInt(aux[9]));
            } else if (aux[10]) {
                automotor = new Camion(aux[0], aux[1], aux[2], parseInt(aux[3]), aux[4], aux[5], parseInt(aux[10]), Boolean(JSON.parse(aux[11])));
            }
            retorno.push(automotor);
        }

        return retorno;
    }

    /**
     * Busca por patente en la lista del automotores del registro.
     * @param patente La patente a buscar
     * @returns Si encuentra la patente, retorna el indice del automotor, sino retorna -1.
     */
    private buscarPatente(patente: string): number {
        let indice: number = -1;
        for(let i: number = 0; i<this.automotores.length; i++) {
            if (this.automotores[i].getPatente() === patente) {
                indice = i;
            }
        };
        return indice;
    }

    public agregarAutomotor(automotores: Automotor): void {
        if (this.buscarPatente(automotores.getPatente()) === -1) {
            this.automotores.push(automotores);
        } else {
            console.log("Ya existe un automotor con esa patente en este registro.");
        }
    }

    public burcarAutomotor(patente: string): Automotor {
        let indice: number = this.buscarPatente(patente);
        if ( indice === -1) {
            return null;
        } else {
            return this.automotores[indice];
        }
    }

    public borrarAutomotor(patente: string): void {
        let indice: number = this.buscarPatente(patente);
        if ( indice === -1) {
            console.log("No existe un automotor con esa patente en este registro.");
        } else {
            this.automotores.splice(indice, 1);
            console.log("Automotor borrado.");
        }
    }

    public actualizarAutomotor(patente: string, titular: string): void {
        let indice: number = this.buscarPatente(patente);
        if ( indice === -1) {
            console.log("No existe un automotor con esa patente en este registro.");
        } else {
            if (titular) {
                this.automotores[indice].setTitular(titular);
                console.log("Automotor actualizado.");
            } else {                
                console.log("Debe ingresar el nombre del titular a actualizar.");
            }
        }
    }
}