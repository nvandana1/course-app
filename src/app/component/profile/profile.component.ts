import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { AuthService } from '../login/auth.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  imports: [NavbarComponent],
})
export class ProfileComponent {
goToResume() {
this.route.navigate(['/profile/resume'])
}
  constructor(private route: Router) {}
  logout() {
    this.route.navigate(['/login']);
  }
}
