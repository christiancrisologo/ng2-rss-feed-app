import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-rss-card',
  templateUrl: './rss-card.component.html',
  styleUrls: ['./rss-card.component.scss']
})
export class RssCardComponent implements OnInit {
  @Input() feed: any;
  constructor() { }

  ngOnInit() {
  }

}