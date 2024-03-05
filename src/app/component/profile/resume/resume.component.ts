import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './resume.component.html',
  styleUrls:[ './resume.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResumeComponent {
  constructor(private route:Router) {
  }
  goBack() {
    this.route.navigate(['/profile'])
  }
}
