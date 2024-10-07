import { Component } from '@angular/core';

@Component({
  selector: 'app-auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrls: ['./auth-modal.component.scss']
})
export class AuthModalComponent {
  isModalOpen = false;
  isLoginMode = true; // true for login, false for signup

  // Model data for login and signup
  loginData = { email: '', password: '' };
  signupData = { username: '', email: '', password: '' };

  // Open modal
  openModal() {
    this.isModalOpen = true;
  }

  // Close modal
  closeModal() {
    this.isModalOpen = false;
  }

  // Toggle between login and signup
  toggleMode(isLogin: boolean) {
    this.isLoginMode = isLogin;
  }

  // Handle login form submission
  onSubmitLogin() {
    console.log('Login Data:', this.loginData);
    this.closeModal();
  }

  // Handle signup form submission
  onSubmitSignup() {
    console.log('Signup Data:', this.signupData);
    this.closeModal();
  }
}
