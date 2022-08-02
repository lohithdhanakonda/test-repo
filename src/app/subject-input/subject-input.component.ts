import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject } from '../store/app.models';

@Component({
  selector: 'app-subject-input',
  templateUrl: './subject-input.component.html',
  styleUrls: ['./subject-input.component.scss']
})
export class SubjectInputComponent implements OnInit {

  @Output() newSubject = new EventEmitter<Subject>();
  constructor() { }

  ngOnInit(): void {
  }
  addSubject(_newSubject: Subject) {
    this.newSubject.emit(_newSubject)
  }
}
