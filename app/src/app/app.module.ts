import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http"
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { TitleBarComponent } from './components/titleBar/title-bar.component';
import { ConversionInputsComponent } from './components/conversionInputs/conversion-inputs/conversion-inputs.component';

import { ConversionInputService } from "./components/conversionInputs/conversion-input.service"

@NgModule({
  declarations: [
  TitleBarComponent,
  ConversionInputsComponent
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ ConversionInputService ], // SERVIÇOS 
  bootstrap: [TitleBarComponent] 
})
export class AppModule { }
