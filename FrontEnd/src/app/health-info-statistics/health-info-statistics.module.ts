import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelathInfoStatisticsComponent } from './helath-info-statistics/helath-info-statistics.component';
import { ChartsModule } from 'ng2-charts';
import { HealthInfoService } from '../services/healthInfo.service';

@NgModule({
  declarations: [HelathInfoStatisticsComponent],
  imports: [
    CommonModule,
    ChartsModule
  ],
  providers: [HealthInfoService]
})
export class HealthInfoStatisticsModule { }
