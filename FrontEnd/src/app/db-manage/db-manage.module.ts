import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DbManageComponent } from './db-manage/db-manage.component';
import { DbService } from '../services/db.service';
import { routing } from './db-manage.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/modules/shared.module';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [DbManageComponent],
  imports: [
    CommonModule,
    FormsModule,
    routing,
    SharedModule,
    CommonModule,
    ReactiveFormsModule,
    BrowserModule
  ],
  providers:[DbService]
})
export class DbManageModule { }
