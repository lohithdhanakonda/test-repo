import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EnrollmentComponent } from './enrollment/enrollment.component';
import { StudentsListComponent } from './students-list/students-list.component';
import { AuthGuardService } from './auth-guard.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { appReducer, studentReducer } from './store/app.reducers';
import { SubjectInputComponent } from './subject-input/subject-input.component';
import { UserNamePipe } from './user-name.pipe';
import { ResultDirective } from './result.directive';
import { EffectsModule } from '@ngrx/effects';
import { StudentEffects } from './store/app.effects';
import { LoaderComponent } from './loader/loader.component';
// import { FormComponentComponent } from './form-component/form-component.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EnrollmentComponent,
    StudentsListComponent,
    SubjectInputComponent,
    UserNamePipe,
    ResultDirective,
    LoaderComponent
    // FormComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({ app: appReducer, student: studentReducer }),
    EffectsModule.forRoot([StudentEffects])
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
