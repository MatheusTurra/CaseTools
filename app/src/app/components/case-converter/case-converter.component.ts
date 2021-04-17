import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ConversionInputService } from 'src/app/services/conversion-input.service';

@Component({
  selector: 'app-case-converter',
  templateUrl: './case-converter.component.html',
  styleUrls: ['./case-converter.component.css']
})

export class CaseConverterComponent implements OnInit {

  public inputText = new FormControl();
  convertedText;

  constructor(private conversionService:ConversionInputService) { }

  ngOnInit(): void {
  }

  uppercaseText(text) {
    this.conversionService.convertToUppercase(text).subscribe( data => {
      this.convertedText = data;
    });     
  }

  lowercaseText(text) {
    this.conversionService.convertToLowercase(text).subscribe( data => {
      this.convertedText = data;
    });
  }

  CamelCaseText(text) {
    this.conversionService.convertToCamelCase(text).subscribe( data => {
      this.convertedText = data;
    });
  }

  snake_case_text(text) {
    this.conversionService.convert_to_snake_case(text).subscribe( data =>  {
      this.convertedText = data; 
    });
  }

  alternatingCaseText(text) {
    this.conversionService.convertToalternatingCase(text).subscribe( data => {
      this.convertedText = data;
    });
  }

  binaryConvert(text) {
    this.conversionService.convertToBinary(text).subscribe( data => {
      this.convertedText = data;
    });
  }

}
