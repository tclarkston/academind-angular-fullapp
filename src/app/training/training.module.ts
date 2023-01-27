import { TrainingRoutingModule } from './training-routing.module';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CurrentTrainingsComponent } from './current-trainings/current-trainings.component';
import { StopTrainingComponent } from './current-trainings/stop-training.component';
import { NewTrainingsComponent } from './new-training/new-training.component';
import { PastTrainingsComponent } from './past-trainings/past-trainings.component';
import { TrainingComponent } from './training.component';

@NgModule({
  declarations: [
    TrainingComponent,
    NewTrainingsComponent,
    CurrentTrainingsComponent,
    PastTrainingsComponent,
    StopTrainingComponent
  ],
  imports: [
    SharedModule,
    TrainingRoutingModule
  ],
  entryComponents:[ StopTrainingComponent ]
})
export class TrainingModule{}