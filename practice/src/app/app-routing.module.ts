import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobfairComponent } from './jobfair/jobfair.component';
import { LearncssComponent } from './learncss/learncss.component';
import { PseudoComponent } from './pseudo/pseudo.component';

const routes: Routes = [
  {path:'jobfair', component:JobfairComponent},
  {path:'learncss', component:LearncssComponent},
  {path:'pseudo', component:PseudoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
