import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Rates } from '../models/rates.model';
import { ExchangeRate } from '../models/exchange-rate.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private client: HttpClient) { }

  getRatesByDate(date:string) :Observable<ExchangeRate> {
    return this.client.get<ExchangeRate>('https://api.ratesapi.io/api/'+ date);
  }
}
