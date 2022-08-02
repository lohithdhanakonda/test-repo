export interface User {
    userEmail: string,
    password: string
}
export interface Student {
    studentEmail: string,
    studentName: string,
    studentDob: Date,
    familyIncome?: number,
    subjects: Subject[],
    totalMarks?: number
}
export interface Subject {
    title: string,
    marks: number
}
export interface AppState {
    currentUser: User,
    currentStudent: Student,
    allStudents: Student[]
}