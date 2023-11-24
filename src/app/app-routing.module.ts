import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NovaPessoaComponent } from './page/nova-pessoa/nova-pessoa.component';
import { PessoaComponent } from './page/pessoa/pessoa.component';
import { AtualizarPessoaComponent } from './page/atualizar-pessoa/atualizar-pessoa.component';
import { HomeComponent } from './page/home/home.component';

import { LocalStoregeComponent } from './page/local-storege/local-storege.component';
import { AngularFireModule } from '@angular/fire/compat';
import { LoginComponent } from './page/login/login.component';
import { CadastroComponent } from './page/cadastro/cadastro.component';
import { CarrinhoComponent } from './page/carrinho/carrinho.component';
import { TokenComponent } from './page/token/token.component';
import { AuthguardService } from './model/authguard.service';




const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'novo',component:NovaPessoaComponent, canActivate:[AuthguardService]},
  {path:'atualizar/:id',component:AtualizarPessoaComponent, canActivate:[AuthguardService]},
  {path:'pessoa',component:PessoaComponent, canActivate:[AuthguardService]},
  { path : 'login' , component : LoginComponent},
  { path : 'cadastro' , component : CadastroComponent},
  { path : 'carrinho' , component : CarrinhoComponent},
  { path : 'localStorage' , component : LocalStoregeComponent, canActivate:[AuthguardService]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
