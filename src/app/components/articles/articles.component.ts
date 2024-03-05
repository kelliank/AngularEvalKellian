import { Component } from '@angular/core';
import { EcommerceService } from '../../services/EcommerceService';
import { CommonModule } from '@angular/common';
import { IArticle } from '../../interfaces/IArticle';
import { EPanierService } from '../../services/epanierService';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.css'
})
export class ArticlesComponent {
  articles!: IArticle[];

  constructor(private ecommerceService: EcommerceService, private panierService: EPanierService) { }

  ngOnInit() {
    this.ecommerceService.getData()
      .subscribe((data: IArticle[]) => {
        this.articles = data;
      });
  }

  addToBasket(article: IArticle, quantity: number) {
    this.panierService.addToPanier(article, quantity);
  }
  
  parseQuantity(value: string): number {
    return parseInt(value, 10); 
  }
  
  isInCart(item: IArticle): boolean {
    return this.panierService.isInBasket(item);
  }
  
  removeFromBasket(article: IArticle) {
    this.panierService.removeFromPanier(article['Unique Entry ID']);
  }
  
}
