import { ModuleTwoModule } from './module-two.module';

describe('ModuleTwoModule', () => {
  let moduleTwoModule: ModuleTwoModule;

  beforeEach(() => {
    moduleTwoModule = new ModuleTwoModule();
  });

  it('should create an instance', () => {
    expect(moduleTwoModule).toBeTruthy();
  });
});
