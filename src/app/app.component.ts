import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { isLoading } from './store/app.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'StudentEnrollmentApp';
  isLoading: Boolean = false;
  constructor(private store: Store) {

  }
  ngAfterContentInit() {
    console.log(this.store,"=== this.store")
    // console.log(this.isLoading,"this.isLoading")
    this.store.pipe(select(isLoading)).subscribe(val => this.isLoading = val)
  }
}
