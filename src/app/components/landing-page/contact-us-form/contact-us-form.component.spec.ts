import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUsFormComponent } from './contact-us-form.component';
import { NgFor } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ContactUsFormComponent', () => {
  let component: ContactUsFormComponent;
  let fixture: ComponentFixture<ContactUsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ContactUsFormComponent, 
        NgFor, 
        ReactiveFormsModule, 
        MatInputModule, 
        MatFormFieldModule, 
        MatSelectModule, 
        MatDatepickerModule, 
        MatNativeDateModule, 
        MatIconModule,
        MatButtonModule,
        BrowserAnimationsModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContactUsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
