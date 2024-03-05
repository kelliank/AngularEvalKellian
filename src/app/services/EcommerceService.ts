import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IArticle } from '../interfaces/IArticle';

@Injectable({
  providedIn: 'root'
})
export class EcommerceService {

  
  private url = 'https://www.eleguen.ovh/api/v1/articles';

  constructor(private httpClient: HttpClient) { }
  
  getData(): Observable<IArticle[]> { 
    return this.httpClient.get<IArticle[]>(this.url); 
  }
}
