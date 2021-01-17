import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrencyHomeComponent } from './views/currency-converter/currency-home/currency-home.component';
import { LengthUnitHomeComponent } from './views/units-converter/length-unit-home/length-unit-home.component';


const routes: Routes = [
  {path: 'currency-converter', component: CurrencyHomeComponent},
  {path: 'length-unit-converter', component: LengthUnitHomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
