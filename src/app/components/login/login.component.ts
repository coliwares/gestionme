import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  user: User = new User();
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.user).subscribe(
      (response) => {
        console.log('Login successful', response);
        this.router.navigate(['/dashboard']); // Redirigir al usuario después del login
      },
      (error) => {
        console.error('Login failed', error);
        this.errorMessage =
          'Login failed. Please check your credentials and try again.';
      }
    );
  }
}
