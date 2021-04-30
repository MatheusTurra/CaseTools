import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http"
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { TitleBarComponent } from './components/titleBar/title-bar.component';

import { ConversionInputService } from "./services/conversion-input.service";
import { CaseConverterComponent } from './components/case-converter/case-converter.component'

@NgModule({
  declarations: [
  TitleBarComponent,
  CaseConverterComponent,
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
