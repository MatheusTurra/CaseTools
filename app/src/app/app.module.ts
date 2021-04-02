import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { TitleBarComponent } from './components/titleBar/title-bar.component';
import { ConversionInputsComponent } from './components/conversionInputs/conversion-inputs/conversion-inputs.component';

@NgModule({
  declarations: [
  TitleBarComponent,
  ConversionInputsComponent
],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [], // MANTÈM DADOS ENTRE ROTAS
  bootstrap: [TitleBarComponent] 
})
export class AppModule { }
