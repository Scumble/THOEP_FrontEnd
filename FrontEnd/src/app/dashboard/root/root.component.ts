import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/shared/services/user.service';
import { Globals } from 'src/app/globals';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss'],
 
})
export class RootComponent implements OnInit {

  constructor( private globals: Globals) { }

  ngOnInit() {
  }

}