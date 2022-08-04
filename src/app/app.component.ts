import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { isLoading } from './store/app.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'StudentEnrollmentApp';
  // isLoading: Observable<Boolean> = this.store.select(isLoading);
  isLoading: Boolean = true;
  constructor(private store: Store) {
    this.store.select(isLoading).subscribe(val => this.isLoading = val)
  }
  ngOnInit() {
    // this.isLoading = this.store.pipe(
    //   select(isLoading)
    // );
    // //   // console.log(this.isLoading,"this.isLoading")
  }
}
