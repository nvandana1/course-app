import { CourseDetailComponent } from './component/home/courseDetail/courseDetail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { WishlistComponent } from './component/wishlist/wishlist.component';
import { CartComponent } from './component/cart/cart.component';
import { ProfileComponent } from './component/profile/profile.component';
import { LoginComponent } from './component/login/login.component';
import { AuthGuard } from './auth.service';
import { ResumeComponent } from './component/profile/resume/resume.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent,canActivate:[AuthGuard] },
  // { path: '**', redirectTo: '/login' },
  { path: 'login', component: LoginComponent },
  { path: 'home/course-details', component: CourseDetailComponent,canActivate:[AuthGuard]},
  { path: 'wishlist', component: WishlistComponent ,canActivate:[AuthGuard]},
  { path: 'cart', component: CartComponent ,canActivate:[AuthGuard]},
  { path: 'profile', component: ProfileComponent ,canActivate:[AuthGuard]},
  { path: 'profile/resume', component: ResumeComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
