import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

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
export class ResumeComponent { }
