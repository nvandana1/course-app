import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ICourse } from '../home.component';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoursesComponent {
addToCart() {
throw new Error('Method not implemented.');
}
  @Input() item!:ICourse;


 }
