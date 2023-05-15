export class Persona {
        id?: number;
        nombre: string;
        apellido: string;
        descripcion: string;
        acercade: string;
        ubicacion: string;
        imgperfil:string;
        imgbaner: string;
    
    
        constructor(nombre:string, apellido: string, imgperfil:string, descripcion: string, ubicacion: string, acercade: string, imgbaner: string){
            this.nombre = nombre;
            this.apellido = apellido;
            this.imgperfil = imgperfil;
            this.descripcion = descripcion;
            this.ubicacion = ubicacion;
            this.acercade = acercade;
            this.imgbaner = imgbaner;
    
        }
    }

