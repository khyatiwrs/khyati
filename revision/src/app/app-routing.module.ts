import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BasicComponent } from './basic/basic.component';
import { LoginComponent } from './login/login.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { ServiceComponent } from './service/service.component';

const routes: Routes = [
  {path:'login', component:LoginComponent  },
  {path:'reactiveform',component:ReactiveformComponent},
  {path:'basic',component:BasicComponent},
  {path:'service', component:ServiceComponent},
  {path:'aboutus', component:AboutusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
