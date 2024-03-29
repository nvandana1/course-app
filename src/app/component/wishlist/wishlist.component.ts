import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { CoursesComponent } from "../home/courses/courses.component";
import { ICourse } from '../home/home.component';
import { CourseService } from 'src/app/services/course.service';
import {MessageService} from "../../services/message.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-wishlist',
    standalone: true,
    templateUrl: './wishlist.component.html',
    styleUrls: ['./wishlist.component.scss'],
    imports: [NavbarComponent, CoursesComponent,CommonModule]
})
export class WishlistComponent {
wishList: any;
course!: ICourse[];
constructor(private courseService: CourseService,private ms:MessageService,private route:Router) {}
ngOnInit(): void {
  this.courseService.courseList.subscribe((course) => (this.course = course));
  this.wishList = this.getWishList();
}
getWishList(): ICourse[] {
  return this.course.filter((course) => course.wishlist);
}

  moveToCart(i: number) {
    // from cart move to wishlist
    this.wishList[i].cart = true;
    this.wishList[i].wishlist = false;
    this.wishList = this.getWishList();
    this.courseService.modifyCourse(this.course);
    this.ms.alert('Moved to cart','info')
  }

  removeFromWishList(i: number) {
    // remove from cart
    this.wishList[i].wishList = false;
    this.wishList = this.getWishList();
    this.courseService.modifyCourse(this.course);
    this.ms.alert('Removed from Wishlist','error');
  }

  goToHome() {
    this.route.navigate(['/home'])
  }
}
