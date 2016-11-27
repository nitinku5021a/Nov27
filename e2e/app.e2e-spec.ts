import { Nov27Page } from './app.po';

describe('nov27 App', function() {
  let page: Nov27Page;

  beforeEach(() => {
    page = new Nov27Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
