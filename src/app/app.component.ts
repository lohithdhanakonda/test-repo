import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
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
  ngDoCheck() {
    this.store.select(isLoading).subscribe(val => this.isLoading = val)
  }
}
