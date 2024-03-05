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
    console.log("article ajouté");
    console.log("id"+ article['Unique Entry ID'])
  }
  
  parseQuantity(value: string): number {
    return parseInt(value, 10); 
  }
  

}
