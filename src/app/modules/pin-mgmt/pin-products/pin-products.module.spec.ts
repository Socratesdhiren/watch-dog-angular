import { PinProductsModule } from './pin-products.module';

describe('PinProductsModule', () => {
  let pinProductsModule: PinProductsModule;

  beforeEach(() => {
    pinProductsModule = new PinProductsModule();
  });

  it('should create an instance', () => {
    expect(pinProductsModule).toBeTruthy();
  });
});
