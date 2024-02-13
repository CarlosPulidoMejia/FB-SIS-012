import { TicketsModule } from './tickets.module';

describe('quejasModule', () => {
  let ticketsModule: TicketsModule;

  beforeEach(() => {
    ticketsModule = new TicketsModule();
  });

  it('should create an instance', () => {
    expect(ticketsModule).toBeTruthy();
  });
});
