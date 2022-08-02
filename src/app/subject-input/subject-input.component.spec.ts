import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { SubjectInputComponent } from './subject-input.component';

describe('SubjectInputComponent', () => {
  let component: SubjectInputComponent;
  let fixture: ComponentFixture<SubjectInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectInputComponent ],
      imports:[FormsModule,RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubjectInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
