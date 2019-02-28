import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PelangganComponent } from './pelanggan/pelanggan.component';

const routes: Routes = [
  {
    path: '',
    component: PelangganComponent
  } 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
