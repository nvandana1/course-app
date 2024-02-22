import { ICourse } from './../home.component';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './courseDetail.component.html',
  styleUrls: ['./courseDetail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseDetailComponent implements OnInit{
  course!: ICourse; 
  filter: any;
  discountPrice: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const course = params;
      this.course = course as ICourse;
      this.discountPrice =`₹${(parseInt(this.course.actualPrice.substring(1))/100) * parseInt(this.course.discountPercentage)}`
    });
  }
}
