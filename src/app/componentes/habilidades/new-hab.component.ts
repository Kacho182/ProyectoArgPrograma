import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/servicios/skill.service';

@Component({
  selector: 'app-new-hab',
  templateUrl: './new-hab.component.html',
  styleUrls: ['./new-hab.component.css']
})
export class NewHabComponent {
  nombre: string;
  valor: number;

  constructor(private sHab: SkillService, private ruta: Router){}


  ngOnInit(): void {
  }

  onCreate(): void{
    const hab = new Skill (this.nombre, this.valor);
    this.sHab.save(hab).subscribe(data=>{alert("Habilidad añadida")
    this.ruta.navigate(['/portfolio']);
  },err =>{
      alert("Fallo");
      this.ruta.navigate(['/portfolio']);
  } )
  }
}



