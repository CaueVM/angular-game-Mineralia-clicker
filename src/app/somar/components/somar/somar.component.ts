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
  private ferroMinerado: number;

  ngOnInit() {
    this.quantiaMinerio = 0;
    this.quantiaOuro  = 0;

  }
  

  calculaMinerar(valorRecebido: number){
    this.quantiaMinerio = this.somar.somar(this.quantiaMinerio,valorRecebido);
  }

  reseta(){
    this.quantiaMinerio = 0;
    this.quantiaOuro = 0;
  }

  get pegaQuantiaMinerio(){
    return this.quantiaMinerio;
  }
  get pegaQuantiaOuro(){
    return this.quantiaOuro;
  }

}

