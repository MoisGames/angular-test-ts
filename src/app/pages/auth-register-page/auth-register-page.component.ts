// login.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../../data/services/auth.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { firstValueFrom } from 'rxjs';


@Component({
  selector: 'app-auth-register-page',
  standalone: true,
  imports: [ReactiveFormsModule,],
  templateUrl: './auth-register-page.component.html',
  styleUrl: 'auth-register-page.component.css'
})

export class AuthRegisterPage {
  loginForm: FormGroup;

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
    // Убедитесь, что форма валидна
    if (this.loginForm.valid) {
      // Используем firstValueFrom, если хотите использовать промис
      firstValueFrom(this.authService.login(this.loginForm.value.email, this.loginForm.value.password)).then(
        success => {
          console.log('Успех:', success);
        }
      ).catch(error => {
        console.error('Ошибка:', error);
      });
    }
  }
}
