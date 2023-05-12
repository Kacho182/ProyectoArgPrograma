import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent implements OnInit {
  nombre: string = '';
  descripcion: string = '';
  url: string = '';

  constructor(private sProyecto: ProyectoService, private ruta: Router){}


  ngOnInit(): void {
  }

  onCreate(): void{
    const proy = new Proyecto(this.nombre, this.descripcion, this.url);
    this.sProyecto.save(proy).subscribe(data=>{alert("Proyecto añadido")
    this.ruta.navigate(['/portfolio']);
  },err =>{
      alert("Fallo");
      this.ruta.navigate(['/portfolio']);
  } )
  }
}
