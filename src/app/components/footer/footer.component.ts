import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    ReactiveFormsModule, 
    MatButtonModule, 
    MatInputModule, 
    MatDividerModule,
    MatListModule,
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  newsletterForm: FormGroup = this.formBuilder.group({
    fullname: ['', Validators.required],
    email: ['', Validators.email],
  });
  
  constructor(private formBuilder: FormBuilder) {}

  onSubmit() {
    console.log(this.newsletterForm.value);
  }
}
