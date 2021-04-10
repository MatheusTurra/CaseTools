import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { ConversionInputService } from '../conversion-input.service';

@Component({
  selector: 'app-conversion-inputs',
  templateUrl: './conversion-inputs.component.html',
  styleUrls: ['./conversion-inputs.component.css']
})

export class ConversionInputsComponent  implements OnInit{

  inputText = new FormControl();
  responseText = new Array();
  convertedText = new Array();

  constructor(private conversionService:ConversionInputService) {}

  ngOnInit() {
    this.responseText = this.conversionService.getRequest();
  }

  getText(text) {
    this.convertedText = this.conversionService.postRequest(text)
  }
}
