import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { ExamComponent } from './components/exam/exam.component';
import { QbDeptComponent } from './components/qb-dept/qb-dept.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: 'login', component:LoginComponent },
  { path: 'exam', component:ExamComponent },
  { path: 'qb_dept', component:QbDeptComponent },
  { path: 'userprofile', component:UserProfileComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
