import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TarjetaCreditoComponent } from './Components/tarjeta-credito/tarjeta-credito.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AltaTarjetaComponent } from './Components/alta-tarjeta/alta-tarjeta.component';
import { MenuComponent } from './Components/menu/menu.component';
import { AppRoutingModule } from './app-routing.module';
import { BajaTarjetaComponent } from './Components/baja-tarjeta/baja-tarjeta.component';


@NgModule({
  declarations: [
    AppComponent,
    TarjetaCreditoComponent,
    AltaTarjetaComponent,
    MenuComponent,
    BajaTarjetaComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
