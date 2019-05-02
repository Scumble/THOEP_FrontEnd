import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { myFocus } from '../../directives/focus.directive';
import {SpinnerComponent} from '../../spinner/spinner.component';
import { AuthGuard } from 'src/app/auth.guard';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports:      [CommonModule,RouterModule,TranslateModule],
  declarations: [myFocus,SpinnerComponent],
  exports:      [myFocus,SpinnerComponent,TranslateModule],
  providers:    [AuthGuard]
})
export class SharedModule { }