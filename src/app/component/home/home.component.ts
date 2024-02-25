import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import data from 'src/assets/data.json';
import { CourseDetailComponent } from './courseDetail/courseDetail.component';
import { Route, Router } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { NavbarComponent } from "../navbar/navbar.component";

export interface ICourse {
  courseName: string;
  author: string;
  actualPrice: string;
  discountPercentage: string;
  tags: string[];
  cart?: boolean;
  wishlist?: boolean;
}
@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    imports: [CommonModule, CourseDetailComponent, CoursesComponent, NavbarComponent]
})
export class HomeComponent implements OnInit {
  banner = 'Discover Latest Courses on Angular';
  data!: ICourse[];
  slectedCourse!: ICourse;

  constructor(private route: Router) {}
  ngOnInit(): void {
    this.data = data;
  }

  courseDetail(course: ICourse) {
    this.slectedCourse = course;
    const {
      courseName,
      author,
      actualPrice,
      discountPercentage,
      tags,
      cart,
      wishlist,
    } = this.slectedCourse;
    this.route.navigate(['/home/course-details'], {
      queryParams: {
        courseName,
        author,
        actualPrice,
        discountPercentage,
        tags,
        cart,
        wishlist
      },
    });
  }
}
