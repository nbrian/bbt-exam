import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { UsersService } from '../../services/users.service';
import { User } from '../../interfaces/user';
import { Router } from '@angular/router';
import { MyErrorStateMatcher } from '../../helper/form-helper';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [
    ReactiveFormsModule, 
    MatCardModule,
    MatInputModule, 
    MatFormFieldModule,
    MatButtonModule 
  ],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {
  registrationForm: FormGroup  = this.formBuilder.group({
    fullname: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    contact: ['', Validators.pattern("^[0-9]*$")],
    message: ['']
  });
  matcher = new MyErrorStateMatcher();
  submitted = false;


  constructor(
    private formBuilder: FormBuilder, 
    private userService: UsersService,
    private route: Router
  ) {}

  ngOnInit() {
    this.registrationForm.valueChanges.subscribe(() => this.submitted = false);
  }

  get form() {
    return this.registrationForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    
    if (this.registrationForm.invalid) {
      for (const control of Object.keys(this.form)) {
        this.form[control].markAsTouched();
      }
      return;
    }
    const user = this.registrationForm.value as User;
    this.userService.registerUser(user).subscribe(data => {
      if(data) {
        console.log(data);
        this.route.navigate([`/welcome/${data.id}`]);
      }
    });
  }

  clear() {
    this.submitted = false;
    this.registrationForm.reset(null, { emitEvent: false, onlySelf: true });
  }
}
