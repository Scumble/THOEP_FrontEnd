import { Component, OnInit } from '@angular/core';
import {Globals} from '../../globals'
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss'],
 
})
export class RootComponent implements OnInit {

  constructor(private globals: Globals) { }

  ngOnInit() {
  }

}