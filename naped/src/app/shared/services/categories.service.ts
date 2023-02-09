import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categorie } from '../model/categorie.modal';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  baseUrl: string = "https://api-naped.vercel.app/api";

  options = {
    headers: {
      'content-type': 'application/json'
    }
  };

  constructor(private httpClient: HttpClient) { }

  getcategories(categories: string) {
    return this.httpClient.get<Array<Categorie>>(`${this.baseUrl}/${categories}`)
  }
  getById(id: number, categories: string){
    return this.httpClient.get<Categorie>(this.baseUrl + `/${categories}/${id}`, this.options);
  }

  createNewPost(categorie: any, categories: string) {
    return this.httpClient.post(this.baseUrl + `/${categories}`, categorie, this.options);
  }

  remove(id: number, categories: string) {
    return this.httpClient.delete(this.baseUrl + categories + id, this.options);
  }

  update(categorie: Partial<Categorie>, categorieEdit: any, categories: string) {
    return this.httpClient.put<Categorie>(`${this.baseUrl}/${categories}/${categorie.id}`, categorieEdit, this.options);
  }
}
