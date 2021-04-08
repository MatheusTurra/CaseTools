import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversionInputsComponent } from './conversion-inputs.component';

describe('ConversionInputsComponent', () => {
  let component: ConversionInputsComponent;
  let fixture: ComponentFixture<ConversionInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConversionInputsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversionInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
