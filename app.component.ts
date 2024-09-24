import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
 import { RouterOutlet } from '@angular/router';
import { NgrxComponent } from './ngrx/ngrx.component';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from './store/app.state';
import { selectCount, selectCounterState } from './store/counter.selector';
import { decrementCounter, incrementCounter } from './store/counter.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  counter$:Observable<number>=new Observable<number>;

  constructor(private store:Store<AppState>){
    this.counter$=store.select(selectCount)
}

onIncrement(){
this.store.dispatch(incrementCounter())
}

onDecrement(){
  this.store.dispatch(decrementCounter())
}
}
