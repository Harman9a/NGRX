import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addData } from '../../ngrx/action/actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  state: any;
  name: string = '';

  constructor(private store: Store<{ myState: number }>) {
    store.select('myState').subscribe((data) => (this.state = data));
  }
  ngOnInit(): void {
    console.log(this.state);
  }

  handleSubmit() {
    this.store.dispatch(addData({ data: this.name }));
  }
}
