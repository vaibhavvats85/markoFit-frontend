import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MarkofitService {

  topHeadlines = 'https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=c52ad646b9d04b9aa8d8d61b74ecfdff';
  constructor(private http: HttpClient) { }

  getHeadlines() {
    return this.http.get<any>(this.topHeadlines);
  }
}
