import { Component, OnInit } from '@angular/core';
import { SomarService } from '../../services';

@Component({
  selector: 'app-somar',
  templateUrl: './somar.component.html',
  styleUrls: ['./somar.component.css']
})
export class SomarComponent implements OnInit {

  constructor(private somar: SomarService) { }
  private valor: number;
  private valorBebida: number;
  private valorLanche: number;
  private valorDoce: number;


  ngOnInit() {
    this.valor        = 0;
    this.valorBebida  = 0;
    this.valorLanche  = 0;
    this.valorDoce    = 0;
  }

  calcula(valorRecebido: number){
    this.valor = this.somar.somar(this.valor,valorRecebido);
  }

  calculaValorLanche(valorRecebidoLanche: number){
    this.valorLanche = this.somar.somar(this.valorLanche,valorRecebidoLanche);
  }
  
  calculaValorBebida(valorRecebidoBebida: number){
    this.valorBebida = this.somar.somar(this.valorBebida,valorRecebidoBebida);
  }

  calculaValorDoce(valorRecebidoDoce: number){
    this.valorDoce = this.somar.somar(this.valorDoce,valorRecebidoDoce);
  }
  reseta(){
    this.valor = 0;
    this.valorLanche = 0;
    this.valorBebida = 0;
    this.valorDoce = 0;
  }

  get pegaValor(){
    return this.valor;
  }
  get pegaValorLanche(){
    return this.valorLanche;
  }
  get pegaValorBebida(){
    return this.valorBebida;
  }
  get pegaValorDoce(){
    return this.valorDoce;
  }

}
