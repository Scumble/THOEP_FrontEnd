import { Component, OnInit } from '@angular/core';

import { HomeDetails } from '../models/home.details.interface';
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'app-home',
  templateUrl: './homeadmin.component.html',
  styleUrls: ['./homeadmin.component.scss']
})
export class HomeadminComponent implements OnInit {

  homeDetails: HomeDetails;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {

    this.dashboardService.getHomeAdminDetails()
    .subscribe((homeDetails: HomeDetails) => {
      this.homeDetails = homeDetails;
    },
    error => {
      //this.notificationService.printErrorMessage(error);
    });
    
  }

}