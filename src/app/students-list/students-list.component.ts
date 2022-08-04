import { Component, OnInit } from '@angular/core';
import { createSelector, Store } from '@ngrx/store';
import { InitialState } from '@ngrx/store/src/models';
import { getAllStudentDetails, startLoader, stopLoader } from '../store/app.actions';
import { AppState, Student, User } from '../store/app.models';
import { allStudentData, isLoading, userData } from '../store/app.selectors';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss']
})
export class StudentsListComponent implements OnInit {

  constructor(private store: Store) { }
  currentUser: User = { userEmail: "", password: "" }
  allStudents: Student[] = []
  loaderStatus: Boolean = false;
  // sampleform: Student = {
  //   studentDob: new Date(),
  //   studentEmail: "",
  //   studentName: "",
  //   subjects: []
  // }
  // export const userSelector = (state: AppState) => state.currentUser

  ngOnInit(): void {
    // this.store.select((state: AppState) => state.currentUser).subscribe(result => {
    //   this.currentUser = result
    // })
    this.store.dispatch(startLoader())

    console.log(this.store, "---this store")
    this.store.dispatch({ type: "[Student List] All Student Details" })

    this.store.select(userData).subscribe(
      result => {
        this.currentUser = result
      })

    this.store.select(allStudentData).subscribe(
      result => {
        this.allStudents = result
        this.store.dispatch(stopLoader())
      }
    )

    console.log(this.store)
  }
  ngOnChanges() {
    this.store.select(allStudentData).subscribe(
      result => {
        this.allStudents = result
      }
    )
  }

}
