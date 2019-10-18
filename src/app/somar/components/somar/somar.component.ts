import { Component, OnInit } from '@angular/core';
import { SomarService } from '../../services';

@Component({
  selector: 'app-somar',
  templateUrl: './somar.component.html',
  styleUrls: ['./somar.component.css']
})
export class SomarComponent implements OnInit {

  constructor(private somar: SomarService) { }
  private quantiaMinerio: number;
  private quantiaOuro: number;
  private valorFerro: number;
  private novaQuantiaOuro: number;
  private valorMineracao: number;

  ngOnInit() {
    this.quantiaMinerio = 0;
    this.quantiaOuro  = 100;

  }
  
  novaPicareta(power: number){
    this.valorMineracao = power;
  }

  calculaMinerar(){
    this.quantiaMinerio = this.somar.somar(this.quantiaMinerio, this.valorMineracao);
  }

  converteFerro(){
    this.quantiaOuro = this.quantiaOuro + (this.quantiaMinerio / 4);
    console.log(this.quantiaOuro);
    this.reseta();
  }

  reseta(){
    this.quantiaMinerio = 0;
  }

  resetAll(){
    this.valorMineracao = 1;
    this.quantiaMinerio = 0;
    this.quantiaOuro = 1000;
  }

  comprarPicareta1(preco: number, poder: number ){
    var power = poder;
    if(this.quantiaOuro >= preco){
      console.log(poder);
      this.quantiaOuro = this.quantiaOuro - preco;
      this.novaPicareta(power);
      return this.quantiaOuro;
    }else{
      alert("minera mais meu fi");
    }
  }

  get pegaValorConvertidoOuro(){
    return this.quantiaOuro;
  }

  get pegaQuantiaMinerio(){
    return this.quantiaMinerio;
  }

  get pegaQuantiaOuro(){
    return this.quantiaOuro;
  }

}

