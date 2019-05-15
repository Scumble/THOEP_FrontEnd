import { Injectable, Inject } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { IPatient } from '../patients/models/patients.model';
import { environment } from 'src/environments/environment';


@Injectable()
export class PatientService {
    myAppUrl: string = environment.apiUrl;
    constructor(private _http: Http) {}
    
    getPatients() {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let authToken = localStorage.getItem('auth_token');
        headers.append('Authorization', `Bearer ${authToken}`);
        return this._http.get(this.myAppUrl + "/patients", { headers }).map((response: Response) => response.json()).catch(this.errorHandler);
    }

    getPatientCoordinates(patientId: number) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let authToken = localStorage.getItem('auth_token');
        headers.append('Authorization', `Bearer ${authToken}`);
        return this._http.get(this.myAppUrl + "/patientcoord/" + patientId, { headers }).map((response: Response) => response.json()).catch(this.errorHandler);
    }

    getEncodedPatientById(patientId: number) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let authToken = localStorage.getItem('auth_token');
        headers.append('Authorization', `Bearer ${authToken}`);
        return this._http.get(this.myAppUrl + "/patient-encoded/" + patientId, { headers }).map((response: Response) => response.text()).catch(this.errorHandler);
    }

    addPatient(patient: IPatient) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let authToken = localStorage.getItem('auth_token');
        headers.append('Authorization', `Bearer ${authToken}`);
        return this._http.post(this.myAppUrl + '/patients', patient, {headers});
    }

    updatePatient(patient: IPatient) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let authToken = localStorage.getItem('auth_token');
        headers.append('Authorization', `Bearer ${authToken}`);
        return this._http.put(this.myAppUrl + '/patients', patient, {headers});
    }

    deletePatient(patientId: number) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let authToken = localStorage.getItem('auth_token');
        headers.append('Authorization', `Bearer ${authToken}`);
        return this._http.delete(this.myAppUrl + '/patients/' + patientId, {headers}).map((response: Response) => response.json()).catch(this.errorHandler) 
    }

    getPatientById(patientId: number) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let authToken = localStorage.getItem('auth_token');
        headers.append('Authorization', `Bearer ${authToken}`);
        return this._http.get(this.myAppUrl + "/patients/" + patientId, { headers }).map((response: Response) => response.json()).catch(this.errorHandler);
    }

    errorHandler(error: Response) {
        console.log(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}  