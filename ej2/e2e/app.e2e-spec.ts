import { Ej2Page } from './app.po';

describe('ej2 App', function() {
  let page: Ej2Page;

  beforeEach(() => {
    page = new Ej2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
