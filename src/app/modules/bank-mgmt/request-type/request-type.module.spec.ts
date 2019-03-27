import { RequestTypeModule } from './request-type.module';

describe('RequestTypeModule', () => {
  let requestTypeModule: RequestTypeModule;

  beforeEach(() => {
    requestTypeModule = new RequestTypeModule();
  });

  it('should create an instance', () => {
    expect(requestTypeModule).toBeTruthy();
  });
});
