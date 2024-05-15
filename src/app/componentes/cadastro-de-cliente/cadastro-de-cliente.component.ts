import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClienteService } from '../../service/cliente.service';
import { RouterModule } from '@angular/router';
import { MatProgressBar } from '@angular/material/progress-bar';

@Component({
  selector: 'app-cadastro-de-cliente',
  standalone: true,

  imports: [FormsModule,ReactiveFormsModule, MatProgressBar,RouterModule],

  templateUrl: './cadastro-de-cliente.component.html',
  styleUrl: './cadastro-de-cliente.component.scss'
})
export class CadastroDeClienteComponent {

    public mensagem = ''

    constructor (private http: ClienteService, private router: Router) {}


    public adicionarCliente(clienteValue: any){

      if(clienteValue.valid){
        //todos campos preenchidos
        const novoCliente = {
          nome: clienteValue.value.nome,
          email: clienteValue.value.email,
          telefone: clienteValue.value.telefone,
          salario: clienteValue.value.salario
        }
        this.http.cadastrarCliente(novoCliente)
          .subscribe
            ((response) => {
            console.log(response);
            }, (error) => {
            console.log(error);
            })

        this.router.navigate(['/simulacao'])
      }else{
        //preencher tds campos
        this.mensagem = "*Preencha todos os campos corretamente"
      }
    }

}

