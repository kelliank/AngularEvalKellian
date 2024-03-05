import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EPanierService } from '../../services/epanierService';
import { CommonModule} from '@angular/common';
import { IArticlePanier } from '../../interfaces/IArticlePanier';
import { Router } from '@angular/router';
import { PaiementComponent } from '../paiement/paiement.component';

@Component({
  selector: 'app-panier',
  standalone: true,
  imports: [CommonModule, PaiementComponent],
  templateUrl: './panier.component.html',
  styleUrl: './panier.component.css'
})
export class PanierComponent implements OnInit {
  @Output() navigate = new EventEmitter<string>();

  panier!: IArticlePanier[];

  constructor(private panierService: EPanierService, private router: Router) { }

  ngOnInit() {
    this.panierService.getPanier()
      .subscribe((panier: IArticlePanier[]) => {
        this.panier = panier;
      });
  }

  removeFromPanier(articleId: string) {
    this.panierService.removeFromPanier(articleId);
  }

  increaseQuantity(articleId: string) {
    this.panierService.increaseQuantity(articleId);
  }

  decreaseQuantity(articleId: string) {
    this.panierService.decreaseQuantity(articleId);
  }

  currentComponent = 'panier';

  navigateTo(component: string) {
    this.currentComponent = component;
  }  
}
