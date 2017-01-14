import { HomeDojoPage } from './app.po';

describe('home-dojo App', function() {
  let page: HomeDojoPage;

  beforeEach(() => {
    page = new HomeDojoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
