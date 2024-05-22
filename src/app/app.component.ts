import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CadastroDeClienteComponent } from './componentes/cadastro-de-cliente/cadastro-de-cliente.component';
import { SimulacaoComponent } from './componentes/simulacao/simulacao.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { MatProgressBar } from '@angular/material/progress-bar';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CadastroDeClienteComponent,SimulacaoComponent,RodapeComponent,MatProgressBar],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'financiamento-imobiliario';
}
