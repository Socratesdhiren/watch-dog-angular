import { IdTypesModule } from './id-types.module';

describe('IdTypesModule', () => {
  let idTypesModule: IdTypesModule;

  beforeEach(() => {
    idTypesModule = new IdTypesModule();
  });

  it('should create an instance', () => {
    expect(idTypesModule).toBeTruthy();
  });
});
