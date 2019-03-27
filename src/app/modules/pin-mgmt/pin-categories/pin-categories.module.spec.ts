import { PinCategoriesModule } from './pin-categories.module';

describe('PinCategoriesModule', () => {
  let pinCategoriesModule: PinCategoriesModule;

  beforeEach(() => {
    pinCategoriesModule = new PinCategoriesModule();
  });

  it('should create an instance', () => {
    expect(pinCategoriesModule).toBeTruthy();
  });
});
