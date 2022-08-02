import { Action, createReducer, on } from "@ngrx/store";
import { getAllStudentDetails, setAllStudentDetails, setCurrentStudent, setCurrentUser } from "./app.actions";
import { AppState } from "./app.models";

export const initialState: AppState = {
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
// export const appReducer = (initialState, action: Action) => {
//     switch (action.type) {
//         case setCurrentUser.name: return { ...initialState, currentUser: { ...action } }
//     }
// }

export const appReducer = createReducer(initialState, on(setCurrentUser, (state, { userData }) => (
    {
        ...state, currentUser: userData
    })
))

export const studentReducer = createReducer(initialState,
    on(setCurrentStudent, (state, { studentData }) => {
        return {
            ...state, currentStudent: studentData, allStudents: [...state.allStudents, studentData]
        }
    }),
    on(getAllStudentDetails, (state, { studentsList }) => {
        return {
            ...state, allStudents: studentsList
        }
    }),
    on(setAllStudentDetails, (state, { students }) => {
        debugger
        return {
            ...state, allStudents: students
        }
    }))