import { Component } from '@angular/core';
import { User } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  user: User = new User();
  errorMessage: string = '';

  constructor(private authService: AuthService) {}

  login() {
    this.authService.login(this.user).subscribe(
      (response) => {
        console.log('Login successful', response);
        // Manejar la respuesta exitosa, por ejemplo, guardar el token y redirigir al usuario
      },
      (error) => {
        console.error('Login failed', error);
        this.errorMessage =
          'Login failed. Please check your credentials and try again.';
      }
    );
  }
}
