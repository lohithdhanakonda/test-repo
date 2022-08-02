import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { AuthGuardService } from '../auth-guard.service';

import { AppState } from '../store/app.models';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let routerSpy: any;
  const initialState: AppState = {
    currentUser: { userEmail: "", password: "" },
    currentStudent: {
      familyIncome: undefined,
      studentDob: new Date(),
      studentEmail: "",
      studentName: "",
      subjects: [
        { title: "", marks: 0 }
      ]
    },
    allStudents: []
  }
  beforeEach(async () => {
    routerSpy = jasmine.createSpyObj(Router, ['navigateByUrl'])
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [FormsModule, RouterTestingModule],
      providers: [provideMockStore({ initialState }), AuthGuardService]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
