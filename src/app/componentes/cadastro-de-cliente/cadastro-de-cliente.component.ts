import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatProgressBar } from '@angular/material/progress-bar';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-cadastro-de-cliente',
  standalone: true,
  imports: [MatProgressBar,RouterModule,FormsModule],
  templateUrl: './cadastro-de-cliente.component.html',
  styleUrl: './cadastro-de-cliente.component.scss'
})
export class CadastroDeClienteComponent {
  public titulo = 'Simulador fincanceiro';
  public usuario = 'raquel.souza';
  public tipoTransacao = 'simulacao';
  public descricaoTransacao!: string;

}

