import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { LengthUnitHomeComponent } from './views/units-converter/length-unit-home/length-unit-home.component';
import { CurrencyHomeComponent } from './views/currency-converter/currency-home/currency-home.component';


@NgModule({
  declarations: [
    AppComponent,
    CurrencyHomeComponent,
    LengthUnitHomeComponent,
    CurrencyHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    FormsModule
  ],

 
  providers: [DataService],
  bootstrap: [AppComponent]
})
// @NgModule({
//   exports: [
//     MatCardModule
//   ]})

export class AppModule { }
