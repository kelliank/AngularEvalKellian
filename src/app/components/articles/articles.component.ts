import { Component } from '@angular/core';
import { EcommerceService } from '../../services/EcommerceService';
import { CommonModule } from '@angular/common';
import { IArticle } from '../../interfaces/IArticle';
import {MatIconModule} from '@angular/material/icon'

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.css'
})
export class ArticlesComponent {
  articles!: IArticle[];

  constructor(private ecommerceService: EcommerceService) { }

  ngOnInit() {
    this.ecommerceService.getData()
      .subscribe((data: IArticle[]) => {
        this.articles = data;
      });
  }

}
