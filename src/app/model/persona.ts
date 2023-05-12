export class Persona {
        id?: number;
        nombre: string;
        apellido: string;
        descripcion: string;
        ubicacion: string;
        img:string;
    
    
        constructor(nombre:string, apellido: string, img:string, descripcion: string, ubicacion: string){
            this.nombre = nombre;
            this.apellido = apellido;
            this.img = img;
            this.descripcion = descripcion;
            this.ubicacion = ubicacion;
    
        }
    }

