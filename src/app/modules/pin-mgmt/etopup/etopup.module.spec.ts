import { EtopupModule } from './etopup.module';

describe('EtopupModule', () => {
  let etopupModule: EtopupModule;

  beforeEach(() => {
    etopupModule = new EtopupModule();
  });

  it('should create an instance', () => {
    expect(etopupModule).toBeTruthy();
  });
});
