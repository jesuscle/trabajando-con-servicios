import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarInfoComponent } from './mostrar-info.component';

describe('MostrarInfoComponent', () => {
  let component: MostrarInfoComponent;
  let fixture: ComponentFixture<MostrarInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
