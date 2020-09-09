import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { AboutComponent } from './components/about/about.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { UserComponent } from './components/user/user.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { BindingDemoComponent } from './components/binding-demo/binding-demo.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'contact',component:ContactsComponent},
  {path:'about', component: AboutComponent},
  {path: 'emp', component:EmployeeComponent},
  {path: 'reactiveForm', component:ReactiveFormComponent },
  {path: 'users', component: UserComponent},
  { path: 'addUser', component: AddUserComponent },
  { path: 'binding', component: BindingDemoComponent},
  {path: 'editUser/:id', component: EditUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
