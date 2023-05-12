import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css']
})
export class EditEducacionComponent implements OnInit {
  educ : Educacion = null;

  constructor(private educSer: EducacionService, private activatedRouter : ActivatedRoute,
    private ruta:Router){}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.educSer.detail(id).subscribe(
      data => {
        this.educ = data;
      }, err => {alert("Error al modificar educacion");
      this.ruta.navigate(['/portfolio']);}
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.educSer.update(id, this.educ).subscribe(data => {
      this.ruta.navigate(['/portfolio']);
    }, err =>{
      alert("Error al modificar educacion");
      this.ruta.navigate(['/portfolio']);
    }
    )

  }
}
