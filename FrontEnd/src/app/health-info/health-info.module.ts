import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HealthInfoService } from '../services/healthInfo.service';
import { SharedModule } from '../shared/modules/shared.module';
import { routing } from './healthInfo.routing';
import { AuthGuard } from '../auth.guard';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeartRateComponent } from './heart-rate/heart-rate.component';

@NgModule({
  declarations: [HeartRateComponent],
  imports: [
    CommonModule,
    SharedModule,
    routing,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [AuthGuard, HealthInfoService]
})
export class HealthInfoModule { }
