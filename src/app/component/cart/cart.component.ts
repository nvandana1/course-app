import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { CourseService } from 'src/app/services/course.service';
import { CoursesComponent } from '../home/courses/courses.component';
import { ICourse } from '../home/home.component';
import {MessageService} from "../../services/message.service";

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
  constructor(private courseService: CourseService,private ms:MessageService) {}
  ngOnInit(): void {
    this.courseService.courseList.subscribe((course) => (this.course = course));
    this.cartList = this.getCartList();
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
    this.ms.alert('Moved to wishlist','info')

  }

  removeFromCart(i: number) {
    this.cartList[i].cart = false;
    this.cartList = this.getCartList();
    this.courseService.modifyCourse(this.course);
    this.ms.alert('Removed from Cart','error');

  }
}
