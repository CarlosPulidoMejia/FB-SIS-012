import { QuejasModule } from './quejas.module';

describe('quejasModule', () => {
  let quejasModule: QuejasModule;

  beforeEach(() => {
    quejasModule = new QuejasModule();
  });

  it('should create an instance', () => {
    expect(quejasModule).toBeTruthy();
  });
});
