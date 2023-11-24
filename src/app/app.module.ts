import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PessoaComponent } from './page/pessoa/pessoa.component';

import { HttpClientModule } from '@angular/common/http';
import { NovaPessoaComponent } from './page/nova-pessoa/nova-pessoa.component';
import { FormsModule } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';
import { AtualizarPessoaComponent } from './page/atualizar-pessoa/atualizar-pessoa.component';
import { HomeComponent } from './page/home/home.component';
import { MenuComponent } from './page/menu/menu.component';
import { FooterComponent } from './page/footer/footer.component';

import { LocalStoregeComponent } from './page/local-storege/local-storege.component';
import { configuracao } from './configuracao';
import { AngularFireModule } from '@angular/fire/compat';
import { LoginComponent } from './page/login/login.component';
import { CadastroComponent } from './page/cadastro/cadastro.component';
import { CarrinhoComponent } from './page/carrinho/carrinho.component';
import { TokenComponent } from './page/token/token.component';

@NgModule({
  declarations: [
    AppComponent,
    PessoaComponent,
    NovaPessoaComponent,
    AtualizarPessoaComponent,
    HomeComponent,
    MenuComponent,
    FooterComponent,
    LocalStoregeComponent,
    CadastroComponent,
    TokenComponent,
    LoginComponent,
    CarrinhoComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(configuracao)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
