import {CommonModule} from '@angular/common';
import {Component, OnInit} from '@angular/core';
import data from 'src/assets/data.json';
import {CourseDetailComponent} from './courseDetail/courseDetail.component';
import {Route, Router} from '@angular/router';
import {CoursesComponent} from './courses/courses.component';
import {NavbarComponent} from "../navbar/navbar.component";
import {MessageService} from 'src/app/services/message.service';
import {CourseService} from 'src/app/services/course.service';
import {PaginationService} from "../../services/pagination.service";
import {FormsModule} from "@angular/forms";

export interface ICourse {
  courseName: string;
  author: string;
  actualPrice: string;
  discountPercentage: string;
  tags: string[];
  cart?: boolean;
  discountPrice?: number;
  wishlist?: boolean;
}

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [CommonModule, CourseDetailComponent, CoursesComponent, NavbarComponent, FormsModule]
})
export class HomeComponent implements OnInit {

  banner = 'Discover Latest Courses on Angular';
  data!: ICourse[];
  slectedCourse!: ICourse;
  cart!: ICourse[];
  // Pagination variables
  pageSize = 5;
  currentPage = 1;
  totalPages!: number;
  paginatedData!: any[];
  search!: string;

  constructor(private route: Router, private ms: MessageService, private courseService: CourseService, private paginationService: PaginationService) {
  }

  ngOnInit(): void {
    this.data = this.courseService.getAllCourses();
    this.data.map(course => {
      course.discountPrice = (parseInt(course.actualPrice.substring(1)) / 100) * parseInt(course.discountPercentage)
      return course
    })
    this.totalPages = this.paginationService.getPageCount(this.data.length, this.pageSize);
    this.paginateData();
  }

  onPageChange(pageNumber: number): void {
    this.currentPage = pageNumber;
    this.paginateData();
  }

  courseDetail(course: ICourse) {
    this.slectedCourse = course;
    const {
      courseName,
      author,
      actualPrice,
      discountPercentage,
      discountPrice,
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
        discountPrice,
        tags,
        cart,
        wishlist
      }
    });
  }

  addCart(i: number, event: MouseEvent) {
    // when you click on cart stop getting clicked on cart
    event.stopPropagation();
    if (this.data[i].cart) {
      this.ms.alert('Already added to cart', 'info');
    } else {
      this.data[i].cart = true;
      this.ms.alert('Added to cart', 'info');
    }
    this.courseService.modifyCourse(this.data);
  }

  addToWishList(i: number, event: MouseEvent) {
    event.stopPropagation();
    this.data[i].wishlist = !this.data[i].wishlist;
    if (this.data[i].wishlist) {
      this.ms.alert('Added to Wishlist', 'info');
    } else {
      this.ms.alert('Removed from Wishlist', 'info');
    }
    this.courseService.modifyCourse(this.data);

  }

  private paginateData() {
    this.paginatedData = this.paginationService.paginate(this.data, this.currentPage, this.pageSize);
  }

  searchEv(val: any) {
    this.data=this.courseService.getAllCourses().filter(c=> {
      return c.tags.findIndex(tag=>tag.includes(val))>-1;

    })
    this.paginateData();
  }
}
