import { BgbPage } from './app.po';

describe('bgb App', function() {
  let page: BgbPage;

  beforeEach(() => {
    page = new BgbPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
