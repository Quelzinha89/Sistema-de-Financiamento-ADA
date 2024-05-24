import { Component } from '@angular/core';
import { MatProgressBar } from '@angular/material/progress-bar';
import { MatSliderModule } from '@angular/material/slider'
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import { NgClass } from '@angular/common';
import { ClienteService } from '../../service/cliente.service';
import { Cliente } from '../../model/cliente';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { CurrencyPipe } from '../../pipe/currency.pipe';


@Component({
  selector: 'app-simulacao',
  standalone: true,
  imports: [MatProgressBar,
            MatSliderModule,
            MatButtonModule,
            MatTooltipModule,
            NgClass,
            CurrencyPipe,
            FormsModule,
            RouterModule,
            NgIf
          ],
  templateUrl: './simulacao.component.html',
  styleUrl: './simulacao.component.scss'
})
export class SimulacaoComponent {

  constructor(private clienteService: ClienteService, private router: Router){}

  cliente: Cliente = {
    "nome": "",
    "email": "",
    "telefone": "",
    "salario": 0
  };

  ngOnInit():void {
    this.clienteService.getCliente()
    .subscribe(cliente =>
    this.pegarReferenciaCliente(cliente));
  }

  public salario = 0;
  public parcelaSelecionada: number = 180;
  public valorCreditoAprovado = 0;
  public valorCreditoEscolhido = 0;
  public parcelaComJuros = 0;
  public textoParcelas = "";
  public textoCredito = "Você tem"

  pegarReferenciaCliente(cliente: Cliente):void {
    if(cliente.salario >= 1500){
      this.salario = cliente.salario*25;
      this.valorCreditoAprovado = this.salario;
      this.valorCreditoEscolhido = this.valorCreditoAprovado;
      this.selecionarParcelas(this.parcelaSelecionada)
    }else{
      this.textoCredito = "Você não tem limite"
      this.parcelaSelecionada = 0;
    }
  }
  selecionarParcelas(quantParcelas: number): void {
    this.parcelaSelecionada = quantParcelas;
    let parcelaSemJuros = this.valorCreditoEscolhido/quantParcelas;
    this.parcelaComJuros = parcelaSemJuros + (this.valorCreditoEscolhido/100)
  }
  zerarParcelaJuros(): void {
    this.parcelaComJuros = 0;
    this.parcelaSelecionada = 0;
  }
  setMaximo(): void {
    this.valorCreditoEscolhido = this.valorCreditoAprovado;
    this.parcelaComJuros = 0;
    this.parcelaSelecionada = 0;
    this.textoParcelas = ""

  }
  setMinimo(): void {
    this.valorCreditoEscolhido = 0;
    this.parcelaComJuros = 0;
    this.parcelaSelecionada = 0;
    this.textoParcelas = ""
  }
  irParaTelaCadastro(): void{
    this.router.navigate(['/'])
  }
}
