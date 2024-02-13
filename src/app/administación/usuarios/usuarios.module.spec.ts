import { UsuariosModule } from './usuarios.module';

describe('quejasModule', () => {
  let usuariosModule: UsuariosModule;

  beforeEach(() => {
    usuariosModule = new UsuariosModule();
  });

  it('should create an instance', () => {
    expect(usuariosModule).toBeTruthy();
  });
});
