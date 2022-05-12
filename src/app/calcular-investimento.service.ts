import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class CalcularInvestimentoService {

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  urlInvestimento = "";
  body = "";
  constructor(private http : HttpClient) { }

  public CalcularInvestimento(valorInicial : any, mesesInvestimento : any, tipoInvestimento : any)
  {
    this.urlInvestimento = "https://localhost:44396/Calculo/CalcularInvestimento";
    this.body = '{"ValorInvestimento" : '+ valorInicial + ', "MesesInvestimento" : ' + mesesInvestimento + ', "TipoCalculo" : ' + tipoInvestimento + '}';
    return this.http.post(this.urlInvestimento, this.body, this.httpOptions);
  }

  public CalcularImposto(valor : any, meses : any)
  {
    this.urlInvestimento = "https://localhost:44396/Calculo/CalcularImposto";
    this.body = '{"Valor" : '+ valor + ', "Meses" : ' + meses + '}';
    return this.http.post(this.urlInvestimento, this.body, this.httpOptions);
  }
}
