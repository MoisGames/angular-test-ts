import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../data/services/auth.service';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register-page',
  imports: [ReactiveFormsModule],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.registerForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onRegister() {

    if (this.registerForm.valid) {

      firstValueFrom(this.authService.register(this.registerForm.value.email,
         this.registerForm.value.password)).then(
            success => {
              console.log('Успех:', success);
            }
          ).catch(error => {
            console.error('Ошибка:', error);
          });
        }
  }

  onLogin() {
    this.router.navigate(['login']);
  }
}
