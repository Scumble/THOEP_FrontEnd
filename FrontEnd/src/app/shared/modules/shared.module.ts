import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { myFocus } from '../../directives/focus.directive';
import {SpinnerComponent} from '../../spinner/spinner.component';
import { AuthGuard } from 'src/app/auth.guard';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { HealthInfoComponent } from 'src/app/health-info/health-info/health-info.component';
import { HealthInfoService } from 'src/app/services/healthInfo.service';

@NgModule({
  imports:      [CommonModule,RouterModule,TranslateModule],
  declarations: [myFocus,SpinnerComponent, HealthInfoComponent],
  exports:      [myFocus,SpinnerComponent,TranslateModule, HealthInfoComponent],
  providers:    [AuthGuard, HealthInfoService]
})
export class SharedModule { }