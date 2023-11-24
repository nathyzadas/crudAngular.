import { Injectable } from '@angular/core';
import { Pessoa } from './pessoa';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  private baseUrl='http://localhost:3000/pessoa';

  constructor(private http: HttpClient ) { }

  getPessoas():Observable<Pessoa[]>{
    return this.http.get<Pessoa[]>(this.baseUrl);
  }

  addNew(pessoa:Pessoa):Observable<Pessoa>{
    return this.http.post<Pessoa>(this.baseUrl,pessoa);
  }

  getPessoa(id:string){

    return this.http.get<Pessoa>(this.baseUrl + '/' + id);
  }
 updade(pessoa:Pessoa, id:any):Observable<any>{
  return this.http.put(this.baseUrl + '/' + id, pessoa);
 }
   excluir(id:number):Observable<any>{
     return this.http.delete(this.baseUrl + '/' + id);
     
   }
 }
    





