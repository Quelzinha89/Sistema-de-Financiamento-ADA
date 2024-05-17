import { Component } from '@angular/core';
import { MatProgressBar } from '@angular/material/progress-bar';
import { MatSliderModule } from '@angular/material/slider'
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import { NgClass } from '@angular/common';
import { ClienteService } from '../../service/cliente.service';
import { Cliente } from '../../model/cliente';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-simulacao',
  standalone: true,
  imports: [MatProgressBar,MatSliderModule,MatButtonModule,MatTooltipModule, NgClass, CurrencyPipe],
  templateUrl: './simulacao.component.html',
  styleUrl: './simulacao.component.scss'
})
export class SimulacaoComponent {

  cliente: Cliente = {
    "nome": "",
    "email": "",
    "telefone": "",
    "salario": 0
  };

  ngOnInit():void {
    this.getCliente();

  }

  constructor(private clienteService: ClienteService){}

  public parcelaSelecionada: number = 180;


  public selecionarParcelas(quant_parcelas: number){
    this.parcelaSelecionada = quant_parcelas
    console.log(quant_parcelas);
  }

  getCliente():void {
    this.clienteService.getCliente()
    .subscribe(cliente =>
      this.cliente.salario= cliente.salario);
  }
}
