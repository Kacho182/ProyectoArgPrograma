import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})
export class EditProyectoComponent implements OnInit {
  proy : Proyecto = null;

  constructor(private sProyecto: ProyectoService, private activatedRouter : ActivatedRoute,
    private ruta:Router){}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sProyecto.detail(id).subscribe(
      data => {
        this.proy = data;
      }, err => {alert("Error al modificar Proyecto");
      this.ruta.navigate(['/portfolio']);}
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sProyecto.update(id, this.proy).subscribe(data => {
      this.ruta.navigate(['/portfolio']);
    }, err =>{
      alert("Error al modificar Proyecto");
      this.ruta.navigate(['/portfolio']);
    }
    )

  }
}
