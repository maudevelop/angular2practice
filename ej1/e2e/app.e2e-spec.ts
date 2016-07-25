import { Ej1Page } from './app.po';

describe('ej1 App', function() {
  let page: Ej1Page;

  beforeEach(() => {
    page = new Ej1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
