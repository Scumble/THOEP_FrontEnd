import { Subscription } from 'rxjs';
import { Component, OnInit,OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Credentials } from '../../shared/models/credentials.interface';
import { adminCredentials } from '../../shared/models/adminCredentials.interface';
import { UserService } from '../../shared/services/user.service';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import {Globals} from '../../globals'
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})

export class LoginFormComponent implements OnInit, OnDestroy {

  private subscription: Subscription;

  brandNew: boolean;
  errors: string;
  isRequesting: boolean;
  submitted: boolean = false;
  credentials: Credentials = { email: '', password: '' };

  constructor(private userService: UserService, private router: Router,private activatedRoute: ActivatedRoute,private globals: Globals,private translate:TranslateService) {      
    translate.setDefaultLang('en');
  }

    ngOnInit() {

    // subscribe to router event
    this.subscription = this.activatedRoute.queryParams.subscribe(
      (param: any) => {
         this.brandNew = param['brandNew'];   
         this.credentials.email = param['email'];         
      });      
  }

   ngOnDestroy() {
    // prevent memory leak by unsubscribing
    this.subscription.unsubscribe();
  }

  login({ value,valid }: { value: Credentials,valid: boolean }) {
    this.submitted = true;
    this.isRequesting = true;
    this.errors='';
    if(value.email=="admin@gmail.com") {
      this.userService.loginAdmin(value.email,value.password)
        .finally(() => this.isRequesting = false)
        .subscribe(
        result => {         
          if (result) {
             this.router.navigate(['/dashboard/homeadmin']);     
             this.globals.isAdmin=true;
          }
        },
        error => this.errors = error);
    }
    else if (valid) {  
      this.userService.login(value.email, value.password)
      .finally(() => this.isRequesting = false)
      .subscribe(
      result => {         
        if (result) {
           this.router.navigate(['/dashboard/home']);   
           this.globals.isAdmin=false;     
        }
      },
      error => this.errors = error);
    }
  }
}