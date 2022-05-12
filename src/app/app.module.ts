import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppCalcularInvestimentoComponent } from './app-calcular-investimento/app-calcular-investimento.component';
import { CalcularInvestimentoService } from './calcular-investimento.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,  ReactiveFormsModule  }  from  '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AppCalcularInvestimentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ CalcularInvestimentoService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
