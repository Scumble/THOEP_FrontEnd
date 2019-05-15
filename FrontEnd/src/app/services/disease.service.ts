import { Injectable, Inject } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { environment } from 'src/environments/environment';


@Injectable()
export class DiseaseService {
    myAppUrl: string = environment.apiUrl;
    constructor(private _http: Http) {}
    
    getDiseases() {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let authToken = localStorage.getItem('auth_token');
        headers.append('Authorization', `Bearer ${authToken}`);
        return this._http.get(this.myAppUrl + "/diseases", { headers }).map((response: Response) => response.json()).catch(this.errorHandler);
    }

    getDiseaseById(diseaseId: number) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let authToken = localStorage.getItem('auth_token');
        headers.append('Authorization', `Bearer ${authToken}`);
        return this._http.get(this.myAppUrl + "/diseases/" + diseaseId, { headers }).map((response: Response) => response.json()).catch(this.errorHandler);
    }

    addDisease(disease: any) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let authToken = localStorage.getItem('auth_token');
        headers.append('Authorization', `Bearer ${authToken}`);
        return this._http.post(this.myAppUrl + '/diseases', disease, {headers});
    }

    updateDisease(disease: any) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let authToken = localStorage.getItem('auth_token');
        headers.append('Authorization', `Bearer ${authToken}`);
        return this._http.put(this.myAppUrl + '/diseases', disease, {headers});
    }

    deleteDisease(diseaseId: number) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let authToken = localStorage.getItem('auth_token');
        headers.append('Authorization', `Bearer ${authToken}`);
        return this._http.delete(this.myAppUrl + '/diseases/' + diseaseId, {headers});
    }
    
    errorHandler(error: Response) {
        console.log(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}  