import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { mantCatalogosComponent } from './mantCatalogos.component';

describe('mantCatalogosComponent', () => {
  let component: mantCatalogosComponent;
  let fixture: ComponentFixture<mantCatalogosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ mantCatalogosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(mantCatalogosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
