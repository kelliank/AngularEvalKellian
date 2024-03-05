import { Injectable } from '@angular/core';
import { IArticle } from '../interfaces/IArticle';
import { BehaviorSubject } from 'rxjs';
import { IArticlePanier } from '../interfaces/IArticlePanier';

@Injectable({
  providedIn: 'root'
})
export class EPanierService {
  private panier: IArticlePanier[] = [];
  private panierSubject = new BehaviorSubject<IArticlePanier[]>(this.panier);
  
  constructor() { }

  addToPanier(article: IArticle, quantity: number) {
    const articlePanier: IArticlePanier = {
      id: article['Unique Entry ID'],
      name: article.Name,
      quantity: quantity,
      price: article.Buy,
      totalPrice: article.Buy * quantity 
    };

    this.panier.push(articlePanier);
    this.panierSubject.next(this.panier);
  }

  removeFromPanier(articleId: string) {
    const itemIndex = this.panier.findIndex(item => item.id === articleId);
    if (itemIndex !== -1) {
      this.panier.splice(itemIndex, 1);
      this.panierSubject.next(this.panier);
    }
  }

  increaseQuantity(articleId: string) {
    const item = this.panier.find(item => item.id === articleId);
    if (item) {
      item.quantity++;
      item.totalPrice = item.price * item.quantity;
      this.panierSubject.next(this.panier);
    }
  }

  decreaseQuantity(articleId: string) {
    const item = this.panier.find(item => item.id === articleId);
    if (item && item.quantity > 1) {
      item.quantity--;
      item.totalPrice = item.price * item.quantity;
      this.panierSubject.next(this.panier);
    }
  }

  getPanier() {
    return this.panierSubject.asObservable();
  }
}
