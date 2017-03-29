import { Component } from '@angular/core';
import { RssService } from './services/rss.service';

import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';

private feedUrl: string = 'https%3A%2F%2Fwww.becompany.ch%2Fen%2Fblog%2Ffeed.xml';
  private feeds: any[];

  constructor (
    private _rssService: RssService
  ) {}

  ngOnInit() {
    this.refreshFeed();
  }

  refreshFeed() {
    console.log('refresh feed');
    this._rssService.getFeedContent(this.feedUrl)
        .subscribe(
            feed => {
              this.feeds = feed.items
            },
            error => console.log(error));
  }

}
