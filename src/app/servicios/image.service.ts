import { Injectable, } from '@angular/core';
import { Storage, ref, getDownloadURL, list, uploadBytes, listAll} from '@angular/fire/storage'

@Injectable({
  providedIn: 'root'
})
export class ImageService {
    urlperfil: string = "";
    urlbaner: string = "";
  
    constructor(private storage: Storage) { }
  
    public uploadImagenperfil($event: any, nameperfil: string){
      const file = $event.target.files[0];
      const imgRef = ref(this.storage, `imagen_perfil/` + nameperfil);
  
      uploadBytes(imgRef, file)
        .then(response => this.getImagenperfil())
        .catch(error => console.log(error));
    }
  
    public uploadImagenbaner($event: any, namebaner: string){
      const file = $event.target.files[0];
      const imgRef = ref(this.storage, `imagen_baner/` + namebaner);
  
      uploadBytes(imgRef, file)
        .then(response => this.getImagenbaner())
        .catch(error => console.log(error));
    }
  
    getImagenperfil(){
      const imagesRef = ref(this.storage, 'imagen_perfil/');
      listAll(imagesRef)
        .then(async response => {
          for (const item of response.items) {
            this.urlperfil = await getDownloadURL(item);
          }
        })
        .catch(error => console.log(error));
    }
  
    getImagenbaner(){
      const imagesRef = ref(this.storage, 'imagen_baner/');
      listAll(imagesRef)
        .then(async response => {
          for (const item of response.items) {
            this.urlbaner = await getDownloadURL(item);
          }
        })
        .catch(error => console.log(error));
    }
  }
