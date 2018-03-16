import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  list: string[] = [];
  scrollTop: number;

  constructor() {
    this.scrollTop = 0;
  }

  ngOnInit() {
    const item = '小撸家的猫';

    for (let i = 0; i < 100; i++) {
      this.list.push(item);
    }
  }

  onScrollChange(el: Element) {
    this.scrollTop = el.scrollTop;
  }
}
