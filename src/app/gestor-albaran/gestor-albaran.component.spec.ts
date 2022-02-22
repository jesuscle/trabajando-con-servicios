import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestorAlbaranComponent } from './gestor-albaran.component';

describe('GestorAlbaranComponent', () => {
  let component: GestorAlbaranComponent;
  let fixture: ComponentFixture<GestorAlbaranComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestorAlbaranComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestorAlbaranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
