import { Injectable } from '@angular/core';
import { Carrinho } from './carrinho';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
carrinho:Carrinho[]=[];
  constructor() { 

const carrinho = localStorage.getItem('carrinho');
if(carrinho){
  this.carrinho = JSON.parse(carrinho);
  }
  }
  atualizarCarrinho():void{
    localStorage.setItem('carrinho', JSON.stringify(this.carrinho));
  
  }
  addItem(item:Carrinho){
    this.carrinho.push(item);
    this.atualizarCarrinho();
    
  }

  removeItem(item:Carrinho){
    const index = this.carrinho.findIndex(
      i => i.id === item.id)
      if(index !== -1){
        this.carrinho.splice(index, 1);
        this.atualizarCarrinho();
      }
  }
      limparCarrinho(){
        this.carrinho = [];
        this.atualizarCarrinho();
      }
  
  getCarinho():Carrinho[]{

    return this.carrinho;
  }
atualiarQuantidade(item:Carrinho){
  const index = this.carrinho.findIndex(
    i => i.id === item.id)
    if(index !== -1){
      this.carrinho[index].quantidade = item.quantidade;
      this.atualizarCarrinho();
    }
}
getTotal(){
  return this.carrinho.reduce(
    (total, item) => total + (item.preco * item.quantidade),0);
}

}
