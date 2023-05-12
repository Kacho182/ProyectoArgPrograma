import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/servicios/persona/persona.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-acerda-de',
  templateUrl: './acerda-de.component.html',
  styleUrls: ['./acerda-de.component.css']
})
export class AcerdaDeComponent implements OnInit {

  persona: Persona = null;
  

  constructor(public personaService: PersonaService, private tokenService: TokenService){}
  isLogged = false;

  
ngOnInit():void{
  this.cargarPerona();
  if(this.tokenService.getToken()){
    this.isLogged = true;
    }else{
      this.isLogged = false;
    }

}

cargarPerona(){
  this.personaService.detail(1).subscribe(data=>{this.persona = data});
}



}
