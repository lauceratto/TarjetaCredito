import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-baja-tarjeta',
  templateUrl: './baja-tarjeta.component.html',
  styleUrls: ['./baja-tarjeta.component.css']
})
export class BajaTarjetaComponent implements OnInit {
  listTarjetas: any=[
    {titular:"Lautaro Ceratto", nroTarjeta:"23340000002344", fechaVencimiento:"02/30",cvv:"123"},
    {titular:"Miguel Borja", nroTarjeta:"21840000099239", fechaVencimiento:"01/25",cvv:"124"}
  ];
  constructor(private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
  }

  volverAtras2(){
    this.router.navigate(['app-menu']);
  }
  eliminarTarjeta(index: Number){
    //Elimina el elemento que esta en este indice, el 1 es para que se elimine solo ese y no muchos mas
    //Si pongo 2 y elimino el elemento de la posicion 1, se eliminan el elemento 1 y 2. 
    this.listTarjetas.splice(index,1);
    this.toastr.error('La tarjeta fue eliminada con exito!', 'Tarjeta eliiminada!');
  }
}
