import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/servicios/skill.service';

@Component({
  selector: 'app-edit-hab',
  templateUrl: './edit-hab.component.html',
  styleUrls: ['./edit-hab.component.css']
})
export class EditHabComponent {
  hab : Skill = null;

  constructor(private sHab: SkillService, private activatedRouter : ActivatedRoute,
    private ruta:Router){}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sHab.detail(id).subscribe(
      data => {
        this.hab = data;
      }, err => {alert("Error al modificar habilidad");
      this.ruta.navigate(['/portfolio']);}
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sHab.update(id, this.hab).subscribe(data => {
      this.ruta.navigate(['/portfolio']);
    }, err =>{
      alert("Error al modificar habilidad");
      this.ruta.navigate(['/portfolio']);
    }
    )

  }
}
