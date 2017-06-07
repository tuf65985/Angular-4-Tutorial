import { MyAngularAppPage } from './app.po';

describe('my-angular-app App', () => {
  let page: MyAngularAppPage;

  beforeEach(() => {
    page = new MyAngularAppPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
