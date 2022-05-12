import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCalcularInvestimentoComponent } from './app-calcular-investimento.component';

describe('AppCalcularInvestimentoComponent', () => {
  let component: AppCalcularInvestimentoComponent;
  let fixture: ComponentFixture<AppCalcularInvestimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppCalcularInvestimentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppCalcularInvestimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
