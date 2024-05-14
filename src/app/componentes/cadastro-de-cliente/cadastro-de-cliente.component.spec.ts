import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastroDeClienteComponent } from './cadastro-de-cliente.component';

describe('CadastroDeClienteComponent', () => {
  let component: CadastroDeClienteComponent;
  let fixture: ComponentFixture<CadastroDeClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroDeClienteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroDeClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
