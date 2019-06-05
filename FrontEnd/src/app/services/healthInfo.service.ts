import { Injectable, Inject } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { environment } from 'src/environments/environment';


@Injectable()
export class HealthInfoService {
    myAppUrl: string = environment.apiUrl;
    constructor(private _http: Http) {}
    
    getHealthInfo(patientId: number) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let authToken = localStorage.getItem('auth_token');
        headers.append('Authorization', `Bearer ${authToken}`);
        return this._http.get(this.myAppUrl + "/healthInfos/patient/" + patientId, { headers }).map((response: Response) => response.json()).catch(this.errorHandler);
    }

    getHealthInfoById(healthInfoId: number) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let authToken = localStorage.getItem('auth_token');
        headers.append('Authorization', `Bearer ${authToken}`);
        return this._http.get(this.myAppUrl + "/healthInfo/" + healthInfoId, { headers }).map((response: Response) => response.json()).catch(this.errorHandler);
    }

    getHealthInfoAverage(patientId: number) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let authToken = localStorage.getItem('auth_token');
        headers.append('Authorization', `Bearer ${authToken}`);
        return this._http.get(this.myAppUrl + "/healthInfo/average/" + patientId, { headers }).map((response: Response) => response.json()).catch(this.errorHandler);
    }

    getHealthInfoEncodedById(healthInfoId: number) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let authToken = localStorage.getItem('auth_token');
        headers.append('Authorization', `Bearer ${authToken}`);
        return this._http.get(this.myAppUrl + "/healthInfo-encoded/" + healthInfoId, { headers }).map((response: Response) => response.text()).catch(this.errorHandler);
    }

    getHeartRate() {
        return this._http.get(this.myAppUrl + "/arduino/heartRate").map((response: Response) => response.text()).catch(this.errorHandler);
    }

    addHealthInfo(healthInfo: any) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let authToken = localStorage.getItem('auth_token');
        headers.append('Authorization', `Bearer ${authToken}`);
        return this._http.post(this.myAppUrl + '/healthInfo', healthInfo, {headers});
    }

    checkHealthInfo(patientId: number, healthInfoId: number) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let authToken = localStorage.getItem('auth_token');
        headers.append('Authorization', `Bearer ${authToken}`);
        return this._http.get(this.myAppUrl + "/healthInfo/"+healthInfoId+"/checkpatient/" + patientId, { headers }).map((response: Response) => response.text()).catch(this.errorHandler);
    }

    deleteHealthInfo(healthInfoId: number) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let authToken = localStorage.getItem('auth_token');
        headers.append('Authorization', `Bearer ${authToken}`);
        return this._http.delete(this.myAppUrl + '/healthInfo/' + healthInfoId, {headers}).map((response: Response) => response.json()).catch(this.errorHandler) 
    }
    
    errorHandler(error: Response) {
        console.log(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}  