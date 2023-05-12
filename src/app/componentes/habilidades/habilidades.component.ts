import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/servicios/skill.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
  skill: Skill[] = [];


  constructor(private sHab: SkillService, private tokenService: TokenService){}

  isLogged = false;

  ngOnInit(): void{
    this.cargarHabilidad();
    if(this.tokenService.getToken()){
      this.isLogged = true;
      }else{
        this.isLogged = false;
      }
  }

  cargarHabilidad(): void{
    this.sHab.lista().subscribe(data =>{this.skill = data;})
    }


    delete(id? : number){
      if(id != undefined){
        this.sHab.delete(id).subscribe(data =>{
          this.cargarHabilidad();
        }, err => {
          alert("No se pudo borrar la habilidad")
        })
      }
    }
  }

