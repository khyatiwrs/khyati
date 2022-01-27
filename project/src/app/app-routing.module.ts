import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContectComponent } from './contect/contect.component';
import { ContentComponent } from './content/content.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'content', component:ContentComponent},
  {path:'login', component:LoginComponent},
  {path:'contect', component:ContectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent,ContentComponent,LoginComponent,ContectComponent]