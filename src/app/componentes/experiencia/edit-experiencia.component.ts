import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/servicios/s-experiencia.service';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit {
  exp : Experiencia = null;

  constructor(private sExperiencia: SExperienciaService, private activatedRouter : ActivatedRoute,
    private ruta:Router){}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sExperiencia.detail(id).subscribe(
      data => {
        this.exp = data;
      }, err => {alert("Error al modificar experiencia");
      this.ruta.navigate(['/portfolio']);}
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sExperiencia.update(id, this.exp).subscribe(data => {
      this.ruta.navigate(['/portfolio']);
    }, err =>{
      alert("Error al modificar experiencia");
      this.ruta.navigate(['/portfolio']);
    }
    )

  }

}
