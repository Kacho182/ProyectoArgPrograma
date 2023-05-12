import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent implements OnInit {
  nombre: string = '';
  descripcion: string = '';
  tiempo: string = '';

  constructor(private educSer: EducacionService, private ruta : Router){}


  ngOnInit(): void {
  }

  onCreate(): void{
    const educ = new Educacion(this.nombre, this.descripcion, this.tiempo);
    this.educSer.save(educ).subscribe(data=>{alert("Educacion añadida")
    this.ruta.navigate(['/portfolio']);
  },err =>{
      alert("Fallo");
      this.ruta.navigate(['/portfolio']);
  } )
  }
}
