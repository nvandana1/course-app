import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
    selector: 'app-cart',
    standalone: true,
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss'],
    imports: [NavbarComponent]
})
export class CartComponent {

}
