import { Injectable, Inject } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { environment } from 'src/environments/environment';


@Injectable()
export class DbService {
    myAppUrl: string = environment.apiUrl;
    constructor(private _http: Http) {}

    backupDb() {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let authToken = localStorage.getItem('auth_token');
        headers.append('Authorization', `Bearer ${authToken}`);
        return this._http.post(this.myAppUrl + '/backup', {headers});
    }

    restoreDb() {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let authToken = localStorage.getItem('auth_token');
        headers.append('Authorization', `Bearer ${authToken}`);
        return this._http.post(this.myAppUrl + '/restore', {headers});
    }
    
    errorHandler(error: Response) {
        console.log(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}