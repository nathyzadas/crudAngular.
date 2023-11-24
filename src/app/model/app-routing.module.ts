import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './page/cadastro/cadastro.component';
import { CarrinhoComponent } from './page/carrinho/carrinho.component';
import { LocalStoregeComponent } from './page/local-storege/local-storege.component';
import { LoginComponent } from './page/login/login.component';
import { AuthguardService } from './model/authguard.service';

const routes: Routes = [

  { path : '' , component : LoginComponent},
  { path : 'cadastro' , component : CadastroComponent},
  { path : 'carrinho' , component : CarrinhoComponent, canActivate:[AuthguardService]},
  { path : 'localStorage' , component : LocalStoregeComponent, canActivate:[AuthguardService]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
