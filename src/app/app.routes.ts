import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaiementComponent } from './components/paiement/paiement.component';

const routes: Routes = [
  // Autres routes
  { path: 'paiement', component:  PaiementComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
