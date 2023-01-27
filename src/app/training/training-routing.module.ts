import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { TrainingComponent } from './training.component';

const routes: Routes = [
  { path: '', component: TrainingComponent },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class TrainingRoutingModule { }
