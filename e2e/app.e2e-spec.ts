import { EntGuideV2Page } from './app.po';

describe('ent-guide-v2 App', function() {
  let page: EntGuideV2Page;

  beforeEach(() => {
    page = new EntGuideV2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
