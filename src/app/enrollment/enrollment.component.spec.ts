import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { initialState } from '../store/app.reducers';
import { SubjectInputComponent } from '../subject-input/subject-input.component';

import { EnrollmentComponent } from './enrollment.component';

describe('EnrollmentComponent', () => {
  let component: EnrollmentComponent;
  let fixture: ComponentFixture<EnrollmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EnrollmentComponent, SubjectInputComponent],
      imports: [FormsModule, RouterTestingModule, ReactiveFormsModule],
      providers: [provideMockStore({ initialState })]
    })
      .compileComponents();

    fixture = TestBed.createComponent(EnrollmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it("Subjects to be rendered", () => {
    // component.StudentSubjects = [{ marks: 200, title: "Social" }, { marks: 300, title: "Maths" }]
    let _componentElement: HTMLElement = fixture.nativeElement
    // console.log(_componentElement.querySelector('.individual-subject'))
    console.log(_componentElement.classList)
    // console.log(_componentElement.classList.contains("individual-subject"))
  })
});
