import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { HomeDetails } from '../models/home.details.interface'; 
import {BaseService} from '../../shared/services/base.service';
import { Observable } from 'rxjs/Rx'; 
import '../../rxjs-operators';
import { environment } from 'src/environments/environment';

@Injectable()

export class DashboardService extends BaseService {

  baseUrl: string = environment.apiUrl; 

  constructor(private http: Http) {
     super();
  }

  getHomeDetails(): Observable<HomeDetails> {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      let authToken = localStorage.getItem('auth_token');
      headers.append('Authorization', `Bearer ${authToken}`);
  
    return this.http.get(this.baseUrl + "/dashboard/home",{headers})
      .map(response => response.json())
      .catch(this.handleError);
  }  
  getHomeAdminDetails(): Observable<HomeDetails> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let authToken = localStorage.getItem('auth_token');
    headers.append('Authorization', `Bearer ${authToken}`);

  return this.http.get(this.baseUrl + "/dashboard/homeadmin",{headers})
    .map(response => response.json())
    .catch(this.handleError);
}  
}