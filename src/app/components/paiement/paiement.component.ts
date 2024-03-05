import { Component } from '@angular/core';
import { IUser } from '../../interfaces/IUser';

@Component({
  selector: 'app-paiement',
  standalone: true,
  imports: [],
  templateUrl: './paiement.component.html',
  styleUrl: './paiement.component.css'
})
export class PaiementComponent {
  user: IUser = {
    lastname: '',
    firstname: '',
    adress: '',
    zipcode: '',
    city: '',
    card: '',
    cardDate: ''
  };

  submitForm() {
    console.log('Formulaire soumis avec succès', this.user);
  }
}
