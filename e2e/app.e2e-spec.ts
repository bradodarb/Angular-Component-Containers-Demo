import { ComponentContainersDemoPage } from './app.po';

describe('component-containers-demo App', () => {
  let page: ComponentContainersDemoPage;

  beforeEach(() => {
    page = new ComponentContainersDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
