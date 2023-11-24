import { Component } from '@angular/core';
import { LocalStoregeService } from 'src/app/model/local-storege.service';

@Component({
  selector: 'app-local-storege',
  templateUrl: './local-storege.component.html',
  styleUrls: ['./local-storege.component.css']
})
export class LocalStoregeComponent {
chave:string='';
valor:string='';
constructor(private service:LocalStoregeService){}
  
setItem(){
  if(this.chave && this.valor){
    this.service.setItem(this.chave, this.valor);
    this.chave='';
    this.valor='';
  }
}
getItem(){
 if(this.chave){
   const valor = this.service.getItem(this.chave);
   alert( valor || 'Não encontrado');
   this.chave='';
 }
}
removeItem(){
  if(this.chave){
    this.service.removeItem(this.chave);
    this.chave='';
    this.valor='';
  }
}

}