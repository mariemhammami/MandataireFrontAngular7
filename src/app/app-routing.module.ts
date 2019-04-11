import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnnoncesComponent } from './annonces/annonces.component';
import { MandataireComponent } from './mandataire/mandataire.component';

const routes: Routes = [
  { path: '', component: AnnoncesComponent },
  { path: 'mandataire/:id', component: MandataireComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
