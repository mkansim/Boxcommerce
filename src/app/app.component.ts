import { Component } from '@angular/core';
import { DataService } from './services/data.service';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'boxcommerce';

  constructor(){
  }

  ngOnInit() {    
  } 
}
