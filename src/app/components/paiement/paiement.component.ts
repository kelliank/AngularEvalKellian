import { Component, EventEmitter, Output } from '@angular/core';
import { IUser } from '../../interfaces/IUser';
import { FormsModule } from '@angular/forms';
import { ArticlesComponent } from '../articles/articles.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-paiement',
  standalone: true,
  imports: [FormsModule, ArticlesComponent, CommonModule],
  templateUrl: './paiement.component.html',
  styleUrl: './paiement.component.css'
})
export class PaiementComponent {
  @Output() navigate = new EventEmitter<string>();

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
