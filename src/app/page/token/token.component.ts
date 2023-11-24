import { Component } from '@angular/core';
import { TokenService } from 'src/app/model/token.service';
import { Token } from 'src/app/model/token';
@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.css']
})
export class TokenComponent {
usuario: string= "";
token: Token |null = null;
  constructor(private service: TokenService) { }
  gerarToken() {
    this.token = this.service.gerartoken(this.usuario);
  }
}
