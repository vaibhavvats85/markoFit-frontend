import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { MarkofitService } from 'src/app/services/markofit-service.service';
import { Headlines } from 'src/app/models/headlines';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  topHeadlines: Headlines;

  constructor(private service: MarkofitService) { }
  ngOnInit() {
    this.service.getHeadlines().subscribe((data: Headlines) => {
        this.topHeadlines = data;
    });
  }
  getArticles() {
    return this.topHeadlines.articles;
  }
  goToSource(url): void {
    window.open(url);
  }
  goToImage(image): void {
    window.open(image);
  }
}
