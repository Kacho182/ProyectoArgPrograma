import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona';
import { ImageService } from 'src/app/servicios/image.service';
import { PersonaService } from 'src/app/servicios/persona/persona.service';

@Component({
  selector: 'app-edit-acerca-de',
  templateUrl: './edit-acerca-de.component.html',
  styleUrls: ['./edit-acerca-de.component.css']
})
export class EditAcercaDeComponent implements OnInit {
  persona: Persona = null;

  constructor(private activatedRouter: ActivatedRoute, private sPersona: PersonaService, private ruta: Router, public imageService: ImageService){}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sPersona.detail(id).subscribe(
      data => {
        this.persona = data;
      }, err => {alert("Error al modificar persona");
      this.ruta.navigate(['/portfolio']);}
    )
      
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.persona.imgperfil = this.imageService.urlperfil;
    this.persona.imgbaner = this.imageService.urlbaner;
    this.sPersona.update(id, this.persona).subscribe(
      data =>{
        this.ruta.navigate(['']);
    }, err =>{
      alert("Error al modificar experiencia");
      this.ruta.navigate(['']);
    })
   }
  
   uploadImagenbaner($event: any){
    const id = this.activatedRouter.snapshot.params['id'];
    const nameperfil = "baner_" + id;
    this.imageService.uploadImagenbaner($event, nameperfil)
   }
   uploadImagenperfil($event: any){
    const id = this.activatedRouter.snapshot.params['id'];
    const namebaner = "perfil_" + id;
    this.imageService.uploadImagenperfil($event, namebaner)
   }
}
