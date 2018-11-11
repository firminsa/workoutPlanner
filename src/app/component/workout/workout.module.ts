import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {WorkoutComponent} from './workout.component';
import { WorkoutService } from './workout.service';
import {FormsModule} from "@angular/forms";
import {ExerciseModule} from "../exercise/exercise.module";
import { ShareModalModule } from '../shareModal/shareModal.module';


@NgModule({
  declarations: [
    WorkoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ExerciseModule,
    ShareModalModule
  ],
  exports: [WorkoutComponent],
  providers: [WorkoutService]
})
export class WorkoutModule { }
