import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './Components/menu/menu.component';
import { AltaTarjetaComponent } from './Components/alta-tarjeta/alta-tarjeta.component';
import { TarjetaCreditoComponent } from './Components/tarjeta-credito/tarjeta-credito.component';
import { BajaTarjetaComponent } from './Components/baja-tarjeta/baja-tarjeta.component';


const routes: Routes = [
  {path:'app-menu', component:MenuComponent},
  {path:'app-alta-tarjeta', component:AltaTarjetaComponent},
  {path:'app-tarjeta-credito', component:TarjetaCreditoComponent},
  {path:'app-baja-tarjeta',component:BajaTarjetaComponent},
  {path:'',redirectTo:'app-menu',pathMatch:'full'}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes),
    CommonModule
  ]
})
export class AppRoutingModule { }
