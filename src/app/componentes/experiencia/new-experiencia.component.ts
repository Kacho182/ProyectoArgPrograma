import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/servicios/s-experiencia.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {
  nombre: string = '';
  descripcion: string = '';

  constructor(private sExperiencia: SExperienciaService, private ruta: Router){}


  ngOnInit(): void {
  }

  onCreate(): void{
    const exp = new Experiencia(this.nombre, this.descripcion);
    this.sExperiencia.save(exp).subscribe(data=>{alert("Experiencia añadida")
    this.ruta.navigate(['/portfolio']);
  },err =>{
      alert("Fallo");
      this.ruta.navigate(['/portfolio']);
  } )
  }
}
