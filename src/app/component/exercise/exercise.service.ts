import {Injectable} from '@angular/core';
import {Exercise} from './exercise.model';
import {ExternalRequestsService} from "../../../services/externalRequests.service";


@Injectable()
export class ExerciseService {
  constructor(private er: ExternalRequestsService) { }

  add(obj) {
    return this.er.addExercise(obj);
  }

  updateExercisesForWorkout(workout) {
    return this.er.updateExercisesForWorkout(workout);
  }
  
}
