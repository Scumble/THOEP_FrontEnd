import { Component, OnInit } from '@angular/core';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-db-manage',
  templateUrl: './db-manage.component.html',
  styleUrls: ['./db-manage.component.scss']
})
export class DbManageComponent implements OnInit {

  constructor(private _dbService: DbService) { }

  ngOnInit() {
  }

  backUpDb() {
    this._dbService.backupDb().subscribe(data=> {
      alert("database backedup successfully");
    });
  }

  restoreDb() {
    this._dbService.restoreDb().subscribe(()=> {
    });
  }

}
