import { Component, OnInit } from '@angular/core';
import { HealthInfoService } from 'src/app/services/healthInfo.service';
import { ActivatedRoute } from '@angular/router';
import { Globals } from 'src/app/globals';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-health-info',
  templateUrl: './health-info.component.html',
  styleUrls: ['./health-info.component.scss']
})
export class HealthInfoComponent implements OnInit {
  healthInfo: any;
  patientHealthInfo: string;
  patientId: number;
  closeResult: string;
  healthInfoId: number;
  constructor(private _healthInfoService: HealthInfoService, private _avRoute: ActivatedRoute, private _globals: Globals, private modalService: NgbModal) { }

  ngOnInit() {
    if (this._avRoute.snapshot.params['patientId']) {  
      this._globals.patientId = this._avRoute.snapshot.params['patientId'];  
    }
    this.setHealthInfo(this._globals.patientId);  
    this.checkHealthInfo(this._globals.patientId, this.healthInfoId);
  }

  setHealthInfo(patientId: number) {
    this._healthInfoService.getHealthInfo(patientId).subscribe(data=>{
      this.healthInfo = data;
    })
  }

  deleteHealthInfo(healthInfoId: number) {  
    var ans = confirm("Do you want to delete health info with Id: " + healthInfoId);  
    if (ans) {  
        this._healthInfoService.deleteHealthInfo(healthInfoId).subscribe((data) => {  
            this.setHealthInfo(this._globals.patientId);  
        }, error => console.error(error))  
    }
  }
  
  checkHealthInfo(patientId: number, healthInfoId: number) {
    this._healthInfoService.checkHealthInfo(patientId,healthInfoId).subscribe(data=>{
      this.patientHealthInfo = data;
    });
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
