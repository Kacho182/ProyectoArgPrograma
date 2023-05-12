import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/servicios/persona/persona.service';

@Component({
  selector: 'app-edit-acerca-de',
  templateUrl: './edit-acerca-de.component.html',
  styleUrls: ['./edit-acerca-de.component.css']
})
export class EditAcercaDeComponent implements OnInit {
  persona: Persona = null;

  constructor(private activatedRouter: ActivatedRoute, private sPersona: PersonaService, private ruta: Router){}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sPersona.detail(id).subscribe(
      data => {
        this.persona = data;
      }, err => {alert("Error al modificar persona");
      this.ruta.navigate(['/portfolio']);}
    )
      
  }

  onUpdate(){
    const id = this.activatedRouter.snapshot.params['id'];
    this.sPersona.update(id, this.persona).subscribe(data => {
      this.ruta.navigate(['/portfolio']);
    }, err =>{
      alert("Error al modificar persona");
      this.ruta.navigate(['/portfolio']);
    }
    )
  }

  uploadImage(event:any){

  }

}
