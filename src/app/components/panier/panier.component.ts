import { Component, OnInit } from '@angular/core';
import { IArticle } from '../../interfaces/IArticle';
import { EPanierService } from '../../services/epanierService';
import { CommonModule} from '@angular/common';
import { IArticlePanier } from '../../interfaces/IArticlePanier';
import { Router } from '@angular/router';

@Component({
  selector: 'app-panier',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './panier.component.html',
  styleUrl: './panier.component.css'
})
export class PanierComponent implements OnInit {
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

  payer() {
    console.log("redirection")
    this.router.navigate(['/paiement']); 
  }

}
