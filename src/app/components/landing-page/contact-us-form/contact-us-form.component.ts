import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-contact-us-form',
  standalone: true,
  imports: [
    NgFor, 
    ReactiveFormsModule, 
    MatInputModule, 
    MatFormFieldModule, 
    MatSelectModule, 
    MatDatepickerModule, 
    MatNativeDateModule, 
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './contact-us-form.component.html',
  styleUrl: './contact-us-form.component.scss'
})
export class ContactUsFormComponent {
  @Input() fullname!: string;
  @Input() email!: string;
  @Input() contact!: number;


  contactUsForm: FormGroup  = this.formBuilder.group({
    fullname: ['', Validators.required],
    email: ['', Validators.email],
    contact: [''],
    meeting: ['inquiry'],
    day: ['', Validators.required],
    time: ['', Validators.required],
    message: ['']
  });

  meetingType: string[] = ['inquiry', 'consultation', 'other'];
  
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.contactUsForm.patchValue({
      fullname: this.fullname, 
      email: this.email, 
      contact: this.contact, 
    })
  }

  onSubmit() {
    console.log(this.contactUsForm.value);
  }
}
