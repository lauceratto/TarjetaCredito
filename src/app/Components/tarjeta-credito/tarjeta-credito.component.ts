import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AltaTarjetaComponent } from '../alta-tarjeta/alta-tarjeta.component';

@Component({
  selector: 'app-tarjeta-credito',
  templateUrl: './tarjeta-credito.component.html',
  styleUrls: ['./tarjeta-credito.component.css']
})
export class TarjetaCreditoComponent implements OnInit {
  listTarjetas: any=[
    {titular:"Lautaro Ceratto", nroTarjeta:"23340000002344", fechaVencimiento:"02/30",cvv:"123"},
    {titular:"Miguel Borja", nroTarjeta:"21840000099239", fechaVencimiento:"01/25",cvv:"124"}
  ];
 
  constructor(private toastr: ToastrService, private router: Router) {
  
  }

  //Se recibe el indice desde el botoncito eliminar y se borra
 
  //agregarTarjeta(){
  //  this.listTarjetas.push(this.altaTarjeta.listTarjetas)
  //}
  volverAtras2(){
    this.router.navigate(['app-menu']);
  }
  ngOnInit(): void {
  }

}
