import { Injectable, Inject } from '@angular/core';  
import { Http, Response, Headers } from '@angular/http';  
import { Observable } from 'rxjs/Observable';   
import 'rxjs/add/operator/map';  
import 'rxjs/add/operator/catch';  
import 'rxjs/add/observable/throw';
import { environment } from 'src/environments/environment';


@Injectable()  
export class UserService {  
    myAppUrl: string = environment.apiUrl;  
    constructor(private _http: Http) {}  

    getUsers() {  
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let authToken = localStorage.getItem('auth_token');
        headers.append('Authorization', `Bearer ${authToken}`);
        return this._http.get(this.myAppUrl + "/users",{headers}).map((response: Response) => response.json()).catch(this.errorHandler);  
    }  
    getUserById(UserId: string) {  
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let authToken = localStorage.getItem('auth_token');
        headers.append('Authorization', `Bearer ${authToken}`);
        return this._http.get(this.myAppUrl + "/users/" + UserId,{headers}).map((response: Response) => response.json()).catch(this.errorHandler)  
    }  
    lockUser(UserId: string) {  
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let authToken = localStorage.getItem('auth_token');
        headers.append('Authorization', `Bearer ${authToken}`);
        return this._http.post(this.myAppUrl + "/lockuser/" + UserId,{headers});  
    }  
    unlockUser(UserId: string) {  
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let authToken = localStorage.getItem('auth_token');
        headers.append('Authorization', `Bearer ${authToken}`);
        return this._http.post(this.myAppUrl + "/unlockuser/" + UserId,{headers});  
    }  
    deleteUser(UserId: string) {  
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let authToken = localStorage.getItem('auth_token');
        headers.append('Authorization', `Bearer ${authToken}`);
        return this._http.post(this.myAppUrl + "/users/" + UserId,{headers});  
    }  
    errorHandler(error: Response) {  
        
        console.log(error);  
        return Observable.throw(error.json().error || 'Server error');  
    }  
}  