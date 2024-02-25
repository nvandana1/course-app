import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
    selector: 'app-profile',
    standalone: true,
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
    imports: [NavbarComponent]
})
export class ProfileComponent {}
