import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { createSelector, Store } from '@ngrx/store';
import { InitialState } from '@ngrx/store/src/models';
import { getAllStudentDetails, startLoader } from '../store/app.actions';
import { AppState, Student, User } from '../store/app.models';
import { allStudentData, isLoading, userData } from '../store/app.selectors';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StudentsListComponent implements OnInit {

  constructor(private store: Store, private changeDetection: ChangeDetectorRef) { }
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

    this.store.select(allStudentData).subscribe(
      result => {
        this.allStudents = result
      }
    )

    this.store.select(userData).subscribe(
      result => {
        this.currentUser = result
      })

    // console.log(this.store, "---this store")
    if (!this.allStudents.length) {
      this.store.dispatch({ type: "[Student List] All Student Details" })
      this.store.select(allStudentData).subscribe(
        result => {
          this.allStudents = result
          this.changeDetection.detectChanges()
          // this.store.dispatch(stopLoader())
        }
      )
    }
  }
  ngOnChanges() {
    this.store.select(allStudentData).subscribe(
      result => {
        this.allStudents = result
      }
    )
  }

}
