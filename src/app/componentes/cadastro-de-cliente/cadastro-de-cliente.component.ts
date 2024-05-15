import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClienteService } from '../../service/cliente.service';

@Component({
  selector: 'app-cadastro-de-cliente',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './cadastro-de-cliente.component.html',
  styleUrl: './cadastro-de-cliente.component.scss'
})
export class CadastroDeClienteComponent {

    meuFormulario = new FormGroup({
      nome: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      telefone: new FormControl('', Validators.required),
      salario: new FormControl('', Validators.required)
    })

    constructor (private http: ClienteService, private router: Router) {}


    public adicionarCliente(clienteValue: any){

      if(this.meuFormulario.valid){
        //todos campos preenchidos
        const novoCliente = {
          nome: clienteValue.nome,
          email: clienteValue.email,
          telefone: clienteValue.telefone,
          salario: clienteValue.salario
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
        console.log("Preencha tds os campos");
      }
    }

}
