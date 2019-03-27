import { PrimePage } from './app.po';

describe('prime App', () => {
  let page: PrimePage;

  beforeEach(() => {
    page = new PrimePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
