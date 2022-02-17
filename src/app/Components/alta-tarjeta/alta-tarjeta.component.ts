import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-alta-tarjeta',
  templateUrl: './alta-tarjeta.component.html',
  styleUrls: ['./alta-tarjeta.component.css']
})
export class AltaTarjetaComponent implements OnInit {
  listTarjetas: any = [
    { titular: "Lautaro Ceratto", nroTarjeta: "23340000002344", fechaVencimiento: "02/30", cvv: "123" },
    { titular: "Miguel Borja", nroTarjeta: "21840000099239", fechaVencimiento: "01/25", cvv: "124" }
  ];
  form: FormGroup;
  text = ' ';
  constructor(private fb: FormBuilder, private toastr: ToastrService, private router: Router) {
    this.form = fb.group({
      titular: ['', [Validators.required]],
      nroTarjeta: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(16)]],
      fechaVencimiento: ['', [Validators.required, Validators.maxLength(5), Validators.minLength(5)]],
      cvv: ['', [Validators.required, Validators.maxLength(3), Validators.minLength(3)]]
    });
  }
  agregarTarjeta() {
    //atrapa el valor del formulario
    const tarjeta: any = {
      titular: this.form.get('titular')?.value,
      nroTarjeta: this.form.get('nroTarjeta')?.value,
      fechaVencimiento: this.form.get('fechaVencimiento')?.value,
      cvv: this.form.get('cvv')?.value
    }
    console.log(tarjeta);
    //Guarda la tarjeta creada en el arreglo de tarjetas para luego ser agregada en la lista de tarjetas
    this.listTarjetas.push(tarjeta);
    //Toastr sirve para enviar el mensaje de confimacion de exito. Se instala toast angular (ngx-toastr --save) y se configura
    this.toastr.success('La tarjeta fue registrada con exito!', 'Tarjeta registrada!');
    //Resetea el formulario, limpia los campos
    this.form.reset();
  }
  volverAtras(){
    this.router.navigate(['app-menu']);
  }

  ngOnInit(): void {
  }

}
