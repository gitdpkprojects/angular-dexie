import { AngularDexiePage } from './app.po';

describe('angular-dexie App', () => {
  let page: AngularDexiePage;

  beforeEach(() => {
    page = new AngularDexiePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
