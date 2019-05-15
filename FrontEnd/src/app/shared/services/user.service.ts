import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { UserRegistration } from '../models/user.registration.interface';
import {BaseService} from "./base.service";
import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/Rx'; 
import '../../rxjs-operators';
import { environment } from 'src/environments/environment';

@Injectable()

export class UserService extends BaseService {

  baseUrl: string = environment.apiUrl;

  private _authNavStatusSource = new BehaviorSubject<boolean>(false);
  authNavStatus$ = this._authNavStatusSource.asObservable();
  private _authNavStatusSourceAdmin = new BehaviorSubject<boolean>(false);
  authNavStatusAdmin$ = this._authNavStatusSourceAdmin.asObservable();
  private _authNavStatusSourceSysAdmin = new BehaviorSubject<boolean>(false);
  authNavStatusSysAdmin$ = this._authNavStatusSourceSysAdmin.asObservable();
  private loggedIn = false;
  private isAdmin = false;
  private isSysAdmin = false;
  constructor(private http: Http) {
    super();
    this.loggedIn = !!localStorage.getItem('auth_token');
    this.isAdmin = !!localStorage.getItem('admin');
    this.isSysAdmin = !!localStorage.getItem('sysadmin');
    this._authNavStatusSource.next(this.loggedIn);
    this._authNavStatusSourceAdmin.next(this.isAdmin);
    this._authNavStatusSourceSysAdmin.next(this.isSysAdmin);
  }

    register(email: string, password: string, firstName: string, lastName: string,location: string): Observable<Boolean> {
    let body = JSON.stringify({ email, password, firstName, lastName,location });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.baseUrl + "/account", body, options)
      .map(res => true)
      .catch(this.handleError);
  }  

   login(userName, password) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http
      .post(
      this.baseUrl + '/auth/login',
      JSON.stringify({ userName, password }),{ headers }
      )
      .map(res => res.json())
      .map(res => {
        localStorage.setItem('auth_token', res.auth_token);
        this.loggedIn = true;
        this._authNavStatusSource.next(true);
        this.isAdmin = false;
        this.isSysAdmin = false;
        localStorage.removeItem("admin");
        localStorage.removeItem("sysadmin");
        this._authNavStatusSourceAdmin.next(false);
        this._authNavStatusSourceSysAdmin.next(false);
        return true;
      })
      .catch(this.handleError);
  }
  loginAdmin(userName, password) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http
      .post(
      this.baseUrl + '/auth/admin',
      JSON.stringify({ userName, password }),{ headers }
      )
      .map(res => res.json())
      .map(res => {
        localStorage.setItem('auth_token', res.auth_token);
        this.loggedIn = true;
        this._authNavStatusSource.next(true);
        this.isAdmin = true;
        this.isSysAdmin = false;
        localStorage.setItem("admin","true");
        localStorage.removeItem("sysadmin");
        this._authNavStatusSourceAdmin.next(true);
        this._authNavStatusSourceSysAdmin.next(false);
        return true;
      })
      .catch(this.handleError);
  }

  loginSysAdmin(userName, password) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http
      .post(
      this.baseUrl + '/auth/admin',
      JSON.stringify({ userName, password }),{ headers }
      )
      .map(res => res.json())
      .map(res => {
        localStorage.setItem('auth_token', res.auth_token);
        this.loggedIn = true;
        this._authNavStatusSource.next(true);
        this.isAdmin = false;
        this.isSysAdmin = true;
        localStorage.removeItem("admin");
        localStorage.setItem("sysadmin","true");
        this._authNavStatusSourceAdmin.next(false);
        this._authNavStatusSourceSysAdmin.next(true);
        return true;
      })
      .catch(this.handleError);
  }

  logout() {
    localStorage.removeItem('auth_token');
    this.loggedIn = false;
    this._authNavStatusSource.next(false);
  }

  isLoggedIn() {
    return this.loggedIn;
  }
}
