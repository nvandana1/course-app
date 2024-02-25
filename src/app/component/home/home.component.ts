import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import data from 'src/assets/data.json';
import { CourseDetailComponent } from './courseDetail/courseDetail.component';
import { Route, Router } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { NavbarComponent } from "../navbar/navbar.component";
import { MessageService } from 'src/app/services/message.service';

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

  constructor(private route: Router,private ms:MessageService) {}
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

  addCart(i:number,event:MouseEvent) {
    // when you click on cart stop getting clicked on cart
    event.stopPropagation();
    if(this.data[i].cart){
      this.ms.alert('Already added to cart','info');
    }
    else{
      this.data[i].cart = true;
      this.ms.alert('Added to cart','info');
    }
  }

  addToWishList(i:number,event:MouseEvent){
    event.stopPropagation();
      this.data[i].wishlist = !this.data[i].wishlist ;
      if(this.data[i].wishlist){
        this.ms.alert('Added to Wishlist','info');
      }
      else{
        this.ms.alert('Removed from Wishlist','info');
      }
    } 
}
