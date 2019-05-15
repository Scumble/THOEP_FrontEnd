import { Component, OnInit,OnDestroy } from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import { UserService } from '../shared/services/user.service';
import { TranslateService } from '@ngx-translate/core';
import { Globals } from '../globals';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  status: boolean;
  subscription:Subscription;
  subscriptionAdmin:Subscription;
  subscriptionSysAdmin:Subscription;
  isAdmin: boolean;
  isSysAdmin:boolean;

  constructor(private userService:UserService, private translate: TranslateService, private globals: Globals) {     
    translate.setDefaultLang('en');
   }
   switchLanguage(language: string) {
    this.translate.use(language);
  }

   logout() {
     this.userService.logout();       
  }

  ngOnInit() {
    this.subscriptionAdmin = this.userService.authNavStatusAdmin$.subscribe(isAdmin=>this.isAdmin=isAdmin);
    this.subscriptionSysAdmin = this.userService.authNavStatusSysAdmin$.subscribe(isSysAdmin=>this.isSysAdmin=isSysAdmin);
    this.subscription = this.userService.authNavStatus$.subscribe(status => this.status = status);
  }

   ngOnDestroy() {
    this.subscription.unsubscribe();
    this.subscriptionAdmin.unsubscribe();
    this.subscriptionSysAdmin.unsubscribe();
  }
}