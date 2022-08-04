import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './store/app.models';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }
  getAllStudents(): Observable<{ students: Student[] }> {
    let studentsList: Student[];
    return this.http.get<{ students: Student[] }>("https://studentenrollment.free.beeceptor.com/students-list")
  }
}
