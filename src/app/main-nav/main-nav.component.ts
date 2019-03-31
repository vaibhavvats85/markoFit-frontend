import { Component, EventEmitter, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  // sourceEvent:EventEmitter<string>=new EventEmitter<string>();
  newsSource: string;
  source = [
    { name: 'BBC News', id: '01' },
    { name: 'CNBC News', id: '02' },
    { name: 'Bloomberg', id: '03' },
    { name: 'Investopedia', id: '04' },

  ];
  ngOnInit() {
  }
  constructor(private breakpointObserver: BreakpointObserver) { }

  sourceEvent(source) {
    this.newsSource = source.name;
  }
}
