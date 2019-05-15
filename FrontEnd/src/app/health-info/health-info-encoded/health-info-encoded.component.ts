import { Component, OnInit } from '@angular/core';
import { HealthInfoService } from 'src/app/services/healthInfo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-health-info-encoded',
  templateUrl: './health-info-encoded.component.html',
  styleUrls: ['./health-info-encoded.component.scss']
})
export class HealthInfoEncodedComponent implements OnInit {

  healthInfoEncoded: any;
  healthInfoId: number;
  constructor(private _healthInfoService: HealthInfoService, private _avRoute: ActivatedRoute) { }

  ngOnInit() {
    if (this._avRoute.snapshot.params['healthInfoId']) {  
      this.healthInfoId = this._avRoute.snapshot.params['healthInfoId'];  
    }  
    this.setHealthInfoEncoded(this.healthInfoId);
  }

  setHealthInfoEncoded(healthInfoId: number) {
    this._healthInfoService.getHealthInfoEncodedById(healthInfoId).subscribe(data =>{
      this.healthInfoEncoded = data;
      console.log(this.healthInfoEncoded)
    });
  }

}
