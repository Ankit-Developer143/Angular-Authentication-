import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailsComponent } from './details/details.component';
import { NewAdmissionComponent } from './new-admission/new-admission.component';
import { PaidComponent } from './paid/paid.component';
import { UnpaidComponent } from './unpaid/unpaid.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {path:'',component:DashboardComponent},
  {path:'details/:id',component:DetailsComponent},
  {path:'paid',component:PaidComponent},
  {path:'admission',component:NewAdmissionComponent},
  // {path:'paid',component:PaidComponent},
  // {path:'details/unpaid',component:UnpaidComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent}
  // {path:'',component:DashboardComponent,children:[
  //   {path:'details',component:DetailsComponent}
  // ]},
  

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
