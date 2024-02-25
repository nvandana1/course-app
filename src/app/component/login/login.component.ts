import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  constructor(private authService:AuthService,private router:Router,private messageService: MessageService){}
  username: any;
  password: any;
  login() {
    if (this.authService.canLogin(this.username,this.password)){
      this.router.navigate(['/home']); // Navigate to protected page after successful login
    } else {
      this.router.navigate(['/login']);
      this.messageService.alert('Invalid Password/Username','error');

    }
  }
}
