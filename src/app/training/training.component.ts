import { Component, OnInit, OnDestroy } from '@angular/core';
// import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { TrainingService } from './training.service';
import * as fromTraining from './training.reducer';

@Component({
  selector: 'ft-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit, OnDestroy {
  // ongoingTraining = false;
  // exerciseSubscription: Subscription;
  ongoingTraining$: Observable<boolean>;

  constructor(
    private trainingService: TrainingService,
    private store: Store<fromTraining.State>
  ) { }

  ngOnInit() {
    /* this.exerciseSubscription = this.trainingService.exerciseChanged
      .subscribe(ex => {
        if (ex) {
          this.ongoingTraining = true;
        } else {
          this.ongoingTraining = false;
        }
      }); */
    this.ongoingTraining$ = this.store.select(fromTraining.getIsTraining);
  }

  ngOnDestroy() {
    /* if (this.exerciseSubscription) {
      this.exerciseSubscription.unsubscribe();
    } */
  }

}
