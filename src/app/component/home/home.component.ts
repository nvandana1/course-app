import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import data from 'src/assets/data.json';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [CommonModule],
})
export class HomeComponent implements OnInit {
  banner = 'Discover Latest Courses on Angular';
  data!: {
    courseName: string;
    author: string;
    actualPrice: string;
    discountPercentage: string;
    tags: string[];
    cart?:boolean;
    wishlist?:boolean
  }[];
  checked: boolean = true;

  ngOnInit(): void {
    this.data = data;
  }
}
