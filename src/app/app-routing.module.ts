import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { ChatBoxComponent } from './components/chat-box/chat-box.component';

const routes: Routes = [
  // {
  //   path:'',
  //   component: LoginComponent
  // },
  {
    path:'',
    component: ChatBoxComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AppRoutingModule { }
