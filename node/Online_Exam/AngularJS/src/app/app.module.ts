// Built-in
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';

// Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ExamComponent } from './components/exam/exam.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { LoginService } from './shared/login/login.service';

//other
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { QbDeptComponent } from './components/qb-dept/qb-dept.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserProfileComponent,
    ExamComponent,
    QbDeptComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true
      },LoginService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
