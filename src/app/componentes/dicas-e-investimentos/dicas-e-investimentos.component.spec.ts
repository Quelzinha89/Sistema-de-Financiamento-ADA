import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DicasEInvestimentosComponent } from './dicas-e-investimentos.component';

describe('DicasEInvestimentosComponent', () => {
  let component: DicasEInvestimentosComponent;
  let fixture: ComponentFixture<DicasEInvestimentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DicasEInvestimentosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DicasEInvestimentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
