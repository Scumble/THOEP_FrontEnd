import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { HealthInfoService } from 'src/app/services/healthInfo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-helath-info-statistics',
  templateUrl: './helath-info-statistics.component.html',
  styleUrls: ['./helath-info-statistics.component.scss']
})
export class HelathInfoStatisticsComponent implements OnInit {

  metrics: any;
  patientId: number;
  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = ['Average Metrics'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public metricsInfo: any;
  public barChartData: ChartDataSets[];

  constructor(private _healthInfoService: HealthInfoService, private _avRoute: ActivatedRoute) { }

  ngOnInit() {
    if (this._avRoute.snapshot.params['patientId']) {  
      this.patientId = this._avRoute.snapshot.params['patientId'];  
    }
    this.setMetrics(this.patientId);
  }

  public setMetrics(patientId: number) {
    this._healthInfoService.getHealthInfoAverage(patientId).subscribe(data => {
      this.metrics = data;
      this.barChartData = [
        { data: [this.metrics.averageHeartRate], label: 'Average Heart Rate' },
        { data: [this.metrics.averageBloodPressure], label: 'Average Blood Pressure' },
        { data: [this.metrics.averageTemperature], label: 'Average Temperature'},
        { data: [this.metrics.averageWeight], label: 'Average Weight'}
      ]
      console.log(this.metricsInfo);
    });
  }


  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
}
