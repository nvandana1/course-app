import { ICourse } from './../component/home/home.component';
import { Injectable } from '@angular/core';
import data from 'src/assets/data.json';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  data: ICourse[];
 courseSub = new BehaviorSubject<ICourse[]>([]);
 courseList = this.courseSub.asObservable();
  constructor(){
    this.data=data;
  } 
  getAllCourses(){
    return data;
  }
  
  modifyCourse(courses:ICourse[]){
    this.courseSub.next(courses);
  }
}
