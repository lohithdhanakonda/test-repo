import { Action, createReducer, on } from "@ngrx/store";
import { getAllStudentDetails, setAllStudentDetails, setCurrentStudent, setCurrentUser, startLoader, stopLoader } from "./app.actions";
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
    allStudents: [],
    isLoading: false
}
// export const appReducer = (initialState, action: Action) => {
//     switch (action.type) {
//         case setCurrentUser.name: return { ...initialState, currentUser: { ...action } }
//     }
// }

export const appReducer = createReducer(initialState, on(setCurrentUser, (state, { userData }) => (
    {
        ...state, currentUser: userData
    })),
    on(startLoader, (state) => {
        return {
            //ques: how can write to set and fetching only a bool value
            ...state, isLoading: true
        }
    }),
    on(stopLoader, (state) => {
        return {
            ...state, isLoading: false
        }
    }),
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
        return {
            ...state, allStudents: students
        }
    })
)

// export const studentReducer = createReducer(initialState,
//     )