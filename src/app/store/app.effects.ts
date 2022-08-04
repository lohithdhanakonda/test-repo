import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, EMPTY, map, mergeMap } from "rxjs";
import { StudentService } from "../student.service";
import { getAllStudentDetails, setAllStudentDetails } from "./app.actions";

@Injectable()
export class StudentEffects {
    constructor(
        private actions: Actions,
        private studentService: StudentService
    ) { }
    loadStudent = createEffect(() => this.actions.pipe(
        ofType(getAllStudentDetails),
        mergeMap(() => this.studentService.getAllStudents().pipe(map(_student => setAllStudentDetails(_student)),
            catchError(() => EMPTY)))))

}