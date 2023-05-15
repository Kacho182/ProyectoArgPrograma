export class Educacion {
    id?: number;
    nombre: string;
    descripcion: string;
    tiempo: string;
    img: string;

    constructor(nombre: string, descripcion: string, tiempo: string, img: string){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.tiempo = tiempo;
        this.img = img;
    }

    
}
