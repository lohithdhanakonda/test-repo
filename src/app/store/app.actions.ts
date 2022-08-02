import { createAction, props } from "@ngrx/store";
import { Student, User } from "./app.models";

export const setCurrentUser = createAction("[Login] Set Current User", props<{ userData: User }>())
export const setCurrentStudent = createAction("[Enrollment] Set Current Student", props<{ studentData: Student }>())
export const getAllStudentDetails = createAction("[Student List] All Student Details", props<{ studentsList: Student[] }>())
export const setAllStudentDetails = createAction("[Student List] Set All Student Details", props<{ students: Student[] }>())

