import { Ng2RssFeedAppPage } from './app.po';

describe('ng2-rss-feed-app App', function() {
  let page: Ng2RssFeedAppPage;

  beforeEach(() => {
    page = new Ng2RssFeedAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
