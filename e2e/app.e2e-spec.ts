import { ConfidenceSecretPage } from './app.po';

describe('confidence-secret App', () => {
  let page: ConfidenceSecretPage;

  beforeEach(() => {
    page = new ConfidenceSecretPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
