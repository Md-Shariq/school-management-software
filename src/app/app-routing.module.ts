import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password/forgot-password.component';
import { InterestsComponent } from './components/interests/interests/interests.component';
import { LoginComponent } from './components/login/login/login.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password/reset-password.component';
import { SchoolNameComponent } from './components/school-name/school-name/school-name.component';
import { SignUpPageComponent } from './components/sign-up-page//sign-up-page/sign-up-page.component';
import { LoginGuardGuard } from './guards/login-guard.guard';

const routes: Routes = [
  { path: '', redirectTo: '/school-name', pathMatch: "full" },
  { path: 'login', component: LoginComponent },
  { path: 'school-name', component: SchoolNameComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'sign-up', component: SignUpPageComponent },
  { path: 'interests', component: InterestsComponent },
  { path: 'user', loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
