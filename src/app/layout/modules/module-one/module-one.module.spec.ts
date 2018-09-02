import { ModuleOneModule } from './module-one.module';

describe('ModuleOneModule', () => {
  let moduleOneModule: ModuleOneModule;

  beforeEach(() => {
    moduleOneModule = new ModuleOneModule();
  });

  it('should create an instance', () => {
    expect(moduleOneModule).toBeTruthy();
  });
});
