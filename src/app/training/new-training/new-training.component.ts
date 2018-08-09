import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { TrainingService } from '../training.service';
import { Exercise } from '../exercise.model';

@Component({
  selector: 'ft-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit, OnDestroy {
  exercises: Exercise[];
  private subscription: Subscription;
  
  constructor(
    private trainingService: TrainingService,
  ) { }
  
  ngOnInit() {
    this.subscription = this.trainingService.exercisesChanged
      .subscribe(ex => this.exercises = ex);
    this.fetchExercises();
  }
  
  onStartTraining(form: NgForm) {
    this.trainingService.startExercise(form.value.exercise);
  }

  fetchExercises() {
    this.trainingService.fetchAvailableExercises();
  }
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
