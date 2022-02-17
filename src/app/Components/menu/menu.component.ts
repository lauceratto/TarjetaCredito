import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router) { }
  irHaciaAltaTarjeta(){
    this.router.navigate(['app-alta-tarjeta']);
  }
  verTarjetas(){
    this.router.navigate(['app-tarjeta-credito']);
  }
  bajaTarjetas(){
    this.router.navigate(['app-baja-tarjeta']);
  }
  ngOnInit(): void {
  }

}
