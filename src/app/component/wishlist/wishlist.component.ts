import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { CoursesComponent } from "../home/courses/courses.component";
import { ICourse } from '../home/home.component';
import { CourseService } from 'src/app/services/course.service';

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
constructor(private courseService: CourseService) {}
ngOnInit(): void {
  this.courseService.courseList.subscribe((course) => (this.course = course));
  this.wishList = this.getWishList();
}
getWishList(): ICourse[] {
  return this.course.filter((course) => course.wishlist);
}

}
