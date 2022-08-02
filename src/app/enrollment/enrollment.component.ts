import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { setCurrentStudent } from '../store/app.actions';
import { Subject } from '../store/app.models';

@Component({
  selector: 'app-enrollment',
  templateUrl: './enrollment.component.html',
  styleUrls: ['./enrollment.component.scss']
})
export class EnrollmentComponent implements OnInit {

  enrollmentForm: any;
  StudentSubjects: Subject[] = [];
  currentStudentTotalMarks: number = 0;
  constructor(private store: Store, private route: Router) {

  }
  ngOnInit(): void {
    this.enrollmentForm = new FormGroup({
      studentEmail: new FormControl(),
      studentName: new FormControl(),
      studentDob: new FormControl(),
      familyIncome: new FormControl()
    })
  }
  addSubject(subject: Subject): void {
    this.currentStudentTotalMarks = this.currentStudentTotalMarks + subject.marks
    this.StudentSubjects = [...this.StudentSubjects, subject]
  }
  submitEnrollment(): void {
    this.store.dispatch(setCurrentStudent({ studentData: { ...this.enrollmentForm.value, subjects: this.StudentSubjects, totalMarks: this.currentStudentTotalMarks } }))
    this.route.navigateByUrl("/")
  }
}
