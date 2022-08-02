import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState, Student, User } from "./app.models";

// export const userSelector = (state: AppState) => state.currentUser


export const appSelector = createFeatureSelector<AppState>("app")
export const studentSelector = createFeatureSelector<AppState>("student")
// export const studentsSelector = createFeatureSelector<AppState>("student")

//user data
export const userData = createSelector(appSelector, (state: AppState) => state.currentUser)
export const isLoading = createSelector(appSelector, (state: AppState) => state.isLoading)

//students data
export const studentData = createSelector(studentSelector, (state: AppState) => state.currentStudent)
export const allStudentData = createSelector(studentSelector, (state: AppState) => state.allStudents)
