import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
    selector: 'app-wishlist',
    standalone: true,
    templateUrl: './wishlist.component.html',
    styleUrls: ['./wishlist.component.scss'],
    imports: [NavbarComponent]
})
export class WishlistComponent {

}
