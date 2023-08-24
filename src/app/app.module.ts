import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalcComponent } from './calc/calc.component';

import { RouterModule, Routes } from '@angular/router';
import { ImcComponent } from './imc/imc.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'imc', component: ImcComponent },
  { path: 'calc', component: CalcComponent },
];

@NgModule({
  declarations: [AppComponent, CalcComponent, ImcComponent, HomeComponent],
  imports: [BrowserModule, [RouterModule.forRoot(routes)]],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
