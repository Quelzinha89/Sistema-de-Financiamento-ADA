import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CadastroDeClienteComponent } from './componentes/cadastro-de-cliente/cadastro-de-cliente.component';
import { SimulacaoComponent } from './componentes/simulacao/simulacao.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CadastroDeClienteComponent,SimulacaoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'financiamento-imobiliario';
}
