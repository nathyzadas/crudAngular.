import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStoregeService {

  constructor() { }

setItem(chave: string, valor: string){
  localStorage.setItem(chave, valor);
}

getItem(chave:string): string | null {
  return localStorage.getItem(chave);
}

removeItem(chave: string){
  localStorage.removeItem(chave);
}

}
