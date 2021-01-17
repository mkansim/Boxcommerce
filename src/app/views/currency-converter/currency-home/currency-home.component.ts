import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { combineLatest } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-currency-home',
  templateUrl: './currency-home.component.html',
  styleUrls: ['./currency-home.component.css']
})
export class CurrencyHomeComponent implements OnInit {

  rate: any;
  update:boolean = false;
  baseCurrencyInput: string;
  fxRate: number;
  counterCurrencyInput:string;
  amountInput:number;
  fxDate:string = 'latest';
  convertedAmount:number;
  showResult:boolean = false;
  convertReciprocal:boolean = false;
  y:number;

  constructor(updates:SwUpdate, private data:DataService) {
    updates.available.subscribe(event => {
      updates.activateUpdate().then(() => document.location.reload());
    })
   }

  ngOnInit(): void {
  }

  getCrossRates(baseCurrency:string, counterCurrency:string, date:string):number {
    this.data.getRatesByDate(date).subscribe(result => {     
    let baseCurrencyValue =  result.rates[baseCurrency];
    let counterCurrencyValue =  result.rates[counterCurrency];
    this.fxRate = baseCurrencyValue/counterCurrencyValue; 

    });   
    
    return this.fxRate;
  }

  convertTo(baseCurrency:string, counterCurrency:string, amount:number, date:string) : number {
    this.data.getRatesByDate(date).subscribe(result => {
      this.rate = result;
      this.baseCurrencyInput = baseCurrency;
      this.counterCurrencyInput = counterCurrency;
      this.amountInput = amount;

      console.log(this.baseCurrencyInput != 'EUR');

      if(baseCurrency != 'EUR'){
        this.fxRate = this.getCrossRates(baseCurrency, counterCurrency, date)
        this.convertedAmount =this.fxRate*amount;
      }

      else{
        let value =  result.rates[counterCurrency]
        this.fxRate = value
        
        if(this.fxRate == undefined)
        {
          
          let value =  result.rates[baseCurrency]
          this.fxRate = value
  
          if(this.fxRate == undefined){
            alert('FX Rate for ' + baseCurrency + '/' + counterCurrency + ' not found');
            return;
          }
        
          this.convertReciprocal  = true;
            
        }
        if(this.convertReciprocal)
        {
          this.convertedAmount = amount/this.fxRate;
        }
        else{
            this.convertedAmount =this.fxRate*amount;
        }
      }
      
      
      this.showResult = true;
    });
    this.convertReciprocal = false;
    return this.convertedAmount
  }



}
