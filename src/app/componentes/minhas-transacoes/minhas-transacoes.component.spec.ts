import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinhasTransacoesComponent } from './minhas-transacoes.component';

describe('MinhasTransacoesComponent', () => {
  let component: MinhasTransacoesComponent;
  let fixture: ComponentFixture<MinhasTransacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MinhasTransacoesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MinhasTransacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
