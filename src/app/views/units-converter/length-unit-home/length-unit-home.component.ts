import { Component, OnInit } from '@angular/core';
import { LengthUnit } from 'src/app/models/length-unit.model';
import { Yard } from 'src/app/models/yard.model';

@Component({
  selector: 'app-length-unit-home',
  templateUrl: './length-unit-home.component.html',
  styleUrls: ['./length-unit-home.component.css']
})
export class LengthUnitHomeComponent implements OnInit {

  lengthInput:number;
  baseLenghtInput:string;
  counvertToLengthInput:string;
  showResult:boolean = false;
  convertedLength:number;
  lengthUnitConverter:LengthUnit;

  constructor() {
    var yard = new Yard();
    yard.inch = 36; // 9 yards to inches = 324 in
    yard.meter = 0.9144; // 500 inches to meters = 12.7 m

    var lengthUnitConverter = new LengthUnit();
    lengthUnitConverter.yard = yard;
    this.lengthUnitConverter = lengthUnitConverter;

   }

  ngOnInit(): void {
  }

  convertTo(baseLenghtInput,counvertToLengthInput,lengthInput):number {
    if(baseLenghtInput.toLowerCase() == 'yard')
    {
      if(counvertToLengthInput.toLowerCase() == 'meter' ){
        this.convertedLength = lengthInput*this.lengthUnitConverter.yard.meter;
      }
      if (counvertToLengthInput.toLowerCase() == 'inch') {
        this.convertedLength = lengthInput*this.lengthUnitConverter.yard.inch;
      }
    }
    else {
        if(baseLenghtInput.toLowerCase() == 'meter' && counvertToLengthInput.toLowerCase() == 'yard'){
          this.convertedLength = lengthInput/this.lengthUnitConverter.yard.meter;
        }
        if (baseLenghtInput.toLowerCase() == 'inch' && counvertToLengthInput.toLowerCase() == 'yard') {
          this.convertedLength = lengthInput/this.lengthUnitConverter.yard.inch;
        }
        else {//meters-->inches
          if(baseLenghtInput.toLowerCase() == 'meter' ) {
            this.convertedLength = (lengthInput*this.lengthUnitConverter.yard.inch)/this.lengthUnitConverter.yard.meter;
          }
          else{
            this.convertedLength = (lengthInput*this.lengthUnitConverter.yard.meter)/this.lengthUnitConverter.yard.inch;
          }
          
        }    

    }
    
    this.baseLenghtInput = baseLenghtInput.toUpperCase() ;
    this.counvertToLengthInput = counvertToLengthInput.toUpperCase();
    this.showResult = true;
    
    return this.convertedLength
  }

}
