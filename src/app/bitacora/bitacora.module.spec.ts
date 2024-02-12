import { BitacoraModule } from './bitacora.module';

describe('quejasModule', () => {
  let bitacoraModule: BitacoraModule;

  beforeEach(() => {
    bitacoraModule = new BitacoraModule();
  });

  it('should create an instance', () => {
    expect(bitacoraModule).toBeTruthy();
  });
});
