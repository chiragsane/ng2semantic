import { Ng2semanticPage } from './app.po';

describe('ng2semantic App', () => {
  let page: Ng2semanticPage;

  beforeEach(() => {
    page = new Ng2semanticPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
