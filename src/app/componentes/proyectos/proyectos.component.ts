import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/servicios/proyecto.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit{
  proy: Proyecto[] = [];
  proyecto: Proyecto;
  

  constructor(private sProyecto: ProyectoService , private tokenService: TokenService, private ruta: ActivatedRoute){}
  isLogged = false;

  ngOnInit(): void{
    this.cargarExperiencia();
    if(this.tokenService.getToken()){
      this.isLogged = true;
      }else{
        this.isLogged = false;
      }
  }
        

  cargarExperiencia(): void{
    this.sProyecto.lista().subscribe(data =>{this.proy = data;})
    }


    delete(id? : number){
      if(id != undefined){
        this.sProyecto.delete(id).subscribe(data =>{
          this.cargarExperiencia();
        }, err => {
          alert("No se pudo borrar el proyecto")
        })
      }
    }

}
