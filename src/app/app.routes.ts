import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { CadastroDeClienteComponent } from './componentes/cadastro-de-cliente/cadastro-de-cliente.component';
import { SimulacaoComponent } from './componentes/simulacao/simulacao.component';

export const routes: Routes = [
    {path:'', component: CadastroDeClienteComponent},
    {path:'simulacao', component: SimulacaoComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
