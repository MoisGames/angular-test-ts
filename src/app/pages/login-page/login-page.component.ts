// login.component.ts
import { Component, inject } from '@angular/core';
import { AuthService } from '../../data/services/auth.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { firstValueFrom } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ReactiveFormsModule,],
  templateUrl: './login-page.component.html',
  styleUrl: 'login-page.component.css'
})

export class LoginPage {
  loginForm: FormGroup;
  router = inject(Router)

  constructor(private authService: AuthService, private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: [
         '', [Validators.required, Validators.email]
      ],
      password: [
         '', Validators.required
      ]
    });
  }

  onSubmit() {

    if (this.loginForm.valid) {

      firstValueFrom(this.authService.login(this.loginForm.value.email,
        this.loginForm.value.password)).then(
        success => {
          console.log('Успех:', success);
        }
      ).catch(error => {
        console.error('Ошибка:', error);
      });
    }
  }

  navigateToRegister() {
    this.router.navigate(['register']);
  }
}
