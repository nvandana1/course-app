import {Component, OnInit} from '@angular/core';
import {NavbarComponent} from '../navbar/navbar.component';
import {CommonModule} from '@angular/common';
import {CourseService} from 'src/app/services/course.service';
import {CoursesComponent} from '../home/courses/courses.component';
import {ICourse} from '../home/home.component';
import {MessageService} from "../../services/message.service";
import {Parser} from "@angular/compiler";
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-cart',
  standalone: true,
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  imports: [NavbarComponent, CommonModule, CoursesComponent],
})
export class CartComponent implements OnInit {
  cartList!: ICourse[];
  course!: ICourse[];
  totalPrice:number=0;
  savings: number=0;
  cartPrice: number =0;

  constructor(private courseService: CourseService, private ms: MessageService,private route:Router) {
  }

  ngOnInit(): void {
    this.courseService.courseList.subscribe((course) => (this.course = course));
    this.cartList = this.getCartList();
    this.cartList.forEach(cart => {
      this.totalPrice = this.totalPrice + parseInt(cart.actualPrice.substring(1));
    })

    this.cartList.forEach(cart => {
      if (cart.discountPrice) {
        const diff =cart?.discountPrice;
        this.savings = this.savings+diff;
      }
    })
    this.cartPrice = this.totalPrice-this.savings;
  }

  getCartList(): ICourse[] {
    return this.course.filter((course) => course.cart);
  }

  moveToWish(i: any) {
    // from cart move to wishlist
    this.cartList[i].cart = false;
    this.cartList[i].wishlist = true;
    this.cartList = this.getCartList();
    this.courseService.modifyCourse(this.course);
    this.ms.alert('Moved to wishlist', 'info')

  }

  removeFromCart(i: number) {
    // remove from cart
    this.cartList[i].cart = false;
    this.cartList = this.getCartList();
    this.courseService.modifyCourse(this.course);
    this.ms.alert('Removed from Cart', 'error');

  }

  checkout() {
    if (window.confirm('Are You sure you want to checkout?')) {
      this.cartList = [];
      this.course.map(course => {
        course.cart = false;
        return course
      });
      this.courseService.modifyCourse(this.course);
      this.ms.alert('Order placed', 'info');
    }
  }

  goToHome() {
    this.route.navigate(['/home'])
  }
}
