import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetalharComponent } from './detalhar/detalhar.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CompareDataComponent } from './compare-data/compare-data.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'detalhar/:id', component: DetalharComponent },
  { path: 'comparar', component: CompareDataComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
