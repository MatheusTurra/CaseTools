import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ConversionInputService } from 'src/app/services/conversion-input.service';

@Component({
  selector: 'app-case-converter',
  templateUrl: './case-converter.component.html',
  styleUrls: ['./case-converter.component.css']
})
export class CaseConverterComponent implements OnInit {

  inputText = new FormControl();
  convertedText;

  constructor(private conversionService:ConversionInputService) { }

  ngOnInit(): void {
  }

  uppercaseText(text) {
    this.conversionService.convertToUppercase(text).subscribe( data => {
      this.convertedText = data;
    });     
  }

}
