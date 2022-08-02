import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { setCurrentUser } from '../store/app.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private store: Store) { }
  // @ViewChild("loginForm") loginFormData:NgForm;
  ngOnInit(): void {
  }
  handleLogin(loginForm: FormGroup) {

    localStorage.setItem("userEmail", loginForm?.value?.userEmail)
    this.store.dispatch(setCurrentUser({ userData: { ...loginForm.value } }))
    this.router.navigateByUrl("/")
  }
}
