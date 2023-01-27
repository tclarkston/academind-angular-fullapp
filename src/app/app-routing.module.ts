import { AuthGuard } from './auth/auth.guard';
import { WelcomeComponent } from './welcome/welcome.component';
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'training', 
    loadChildren: () => import('./training/training.module').then(x => x.TrainingModule), canLoad: [AuthGuard]},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {}