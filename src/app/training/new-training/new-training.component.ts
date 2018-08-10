import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
// import { Subscription } from 'rxjs';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { TrainingService } from '../training.service';
import { Exercise } from '../exercise.model';
import * as fromTraining from '../training.reducer';
import * as fromRoot from '../../app.reducer';

@Component({
  selector: 'ft-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit, OnDestroy {
  // exercises: Exercise[];
  // private subscription: Subscription;
  exercises$: Observable<Exercise[]>;
  isLoading$: Observable<boolean>;
  
  constructor(
    private trainingService: TrainingService,
    private store: Store<fromTraining.State>
  ) { }
  
  ngOnInit() {
    /* this.subscription = this.trainingService.exercisesChanged
      .subscribe(ex => this.exercises = ex); */
    this.isLoading$ = this.store.select(fromRoot.getIsLoading);
    this.exercises$ = this.store.select(fromTraining.getAvailableExercises);
    this.fetchExercises();
  }
  
  onStartTraining(form: NgForm) {
    this.trainingService.startExercise(form.value.exercise);
  }

  fetchExercises() {
    this.trainingService.fetchAvailableExercises();
  }
  
  ngOnDestroy() {
    /* if (this.subscription) {
      this.subscription.unsubscribe();
    } */
  }
}
