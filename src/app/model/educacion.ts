export class Educacion {
    id?: number;
    nombre: string;
    descripcion: string;
    tiempo: string;

    constructor(nombre: string, descripcion: string, tiempo: string){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.tiempo = tiempo;
    }

    
}
