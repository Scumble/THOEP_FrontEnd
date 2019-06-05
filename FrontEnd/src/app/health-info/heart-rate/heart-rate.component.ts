import { Component, OnInit } from '@angular/core';
import { HealthInfoService } from 'src/app/services/healthInfo.service';
import { Globals } from 'src/app/globals';

@Component({
  selector: 'app-heart-rate',
  templateUrl: './heart-rate.component.html',
  styleUrls: ['./heart-rate.component.scss']
})
export class HeartRateComponent implements OnInit {

  heartRate: string;
  constructor(private _heartRate: HealthInfoService, private _globals: Globals) { }

  ngOnInit() {
  }

  setHeartRate() {
    this._heartRate.getHeartRate().subscribe(data=> {
      this._globals.heartRate = data
    })
  }
}
