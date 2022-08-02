import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';
import { EnrollmentComponent } from './enrollment/enrollment.component';
import { LoginComponent } from './login/login.component';
import { StudentsListComponent } from './students-list/students-list.component';

const routes: Routes = [
  { path: "", component: StudentsListComponent, canActivate: [AuthGuardService] },
  { path: "enroll", component: EnrollmentComponent, canActivate: [AuthGuardService] },
  { path: "login", component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
