import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Roupas } from '../../../models/roupas.model';
import { RoupasService } from '../../services/roupas.service';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-inserir-roupa',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    RouterModule,
  ],
  templateUrl: './inserir-roupa.component.html',
  styleUrls: ['./inserir-roupa.component.css']
})

export class InserirRoupaComponent implements OnInit {
  @ViewChild('formRoupa') formRoupa! : NgForm;
  roupa! : Roupas;
   constructor(private roupasService:RoupasService, private router: Router ){}

   ngOnInit(): void {
     this.roupa = new Roupas();
   }

   inserirRoupa(): void{
    if(this.formRoupa.form.valid){
      this.roupasService.inserirRoupa(this.roupa);
      this.router.navigate(["/roupas"]);
    }
   }

}
