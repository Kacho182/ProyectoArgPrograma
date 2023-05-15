import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { ImageService } from 'src/app/servicios/image.service';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent implements OnInit {
  nombre: string = '';
  descripcion: string = '';
  tiempo: string = '';
  img: string = '';

  constructor(private educSer: EducacionService, private ruta : Router, private imageService: ImageService, private activatedRouter: ActivatedRoute){}


  ngOnInit(): void {
  }

  onCreate(): void{
    const educ = new Educacion(this.nombre, this.descripcion, this.tiempo, this.img);
    this.educSer.save(educ).subscribe(data=>{alert("Educacion añadida")
    this.ruta.navigate(['/portfolio']);
  },err =>{
      alert("Fallo");
      this.ruta.navigate(['/portfolio']);
  } )
  }

  uploadImageneduc($event: any){
    const id = this.activatedRouter.snapshot.params['id'];
    const nameeduc = "educacion_" + id;
    this.imageService.uploadImagenbaner($event, nameeduc)
   }
}
