import { Component, ViewChild } from '@angular/core';
import { AuthModalComponent } from '../../auth-modal/auth-modal.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @ViewChild(AuthModalComponent) authModal!: AuthModalComponent;
  isModalOpen = false;
  isLoginMode = true; // true for login, false for signup

    // Open modal
    openAuthModal() {
      this.authModal.openModal();
    }
  
    // Close modal
    closeModal() {
      this.authModal.closeModal();
    }
}
