import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SharedModule } from '../shared/modules/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { UserService } from '../services/userservices';

import { routing } from './user.routing';
import { UserComponent } from './user/user.component';
import { AuthGuard } from '../auth.guard';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing,
    SharedModule,
    CommonModule,
    ReactiveFormsModule,
    BrowserModule
  ],
  declarations: [UserComponent],
  providers:    [AuthGuard, UserService ]
})
export class UserModule { }