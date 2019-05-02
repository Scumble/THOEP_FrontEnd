import { Component, OnInit } from '@angular/core';

import { HomeDetails } from '../models/home.details.interface';
import { DashboardService } from '../services/dashboard.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  homeDetails: HomeDetails;

  constructor(private dashboardService: DashboardService,private translate:TranslateService) {
     translate.setDefaultLang('en');
   }

  ngOnInit() {

    this.dashboardService.getHomeDetails()
    .subscribe((homeDetails: HomeDetails) => {
      this.homeDetails = homeDetails;
    },
    error => {
      //this.notificationService.printErrorMessage(error);
    });
    
  }

}