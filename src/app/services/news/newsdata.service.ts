import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class NewsdataService {

  constructor(private http:HttpClient) { }

  newsService:string="https://newsapi.org/v2/everything";
  apiKey="26f2b72f91ea4e6496e90df73d4e0929"

  getNewsByKey(key,fromDate,toDate,sort){
    return this.http.get<any>(this.newsService+"?q="+key+"&from="+fromDate+"&to="+toDate+"&sortBy="+sort+"&apiKey="+this.apiKey);
  }


 
}
