import { LingoZenAppPage } from './app.po';

describe('frontend3 App', () => {
  let page: LingoZenAppPage;

  beforeEach(() => {
    page = new LingoZenAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
