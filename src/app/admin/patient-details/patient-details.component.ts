import { Component, OnInit, Input, ElementRef, NO_ERRORS_SCHEMA } from '@angular/core';
import {GridComponent, GridDataResult, PageChangeEvent, SelectableSettings} from '@progress/kendo-angular-grid';
import {NgbModal, NgbTabChangeEvent, NgbTooltipConfig} from '@ng-bootstrap/ng-bootstrap';
import { sampleProducts} from './patientData';
import {orderBy, SortDescriptor} from '@progress/kendo-data-query';
import { PatientDetailsService} from './patient-details.service';
import * as _ from 'lodash';
import {AlertContent, DialogContent} from '../alert.component';
import { EditPatientComponent} from './edit-patient/edit-patient.component';
import { ViewPatientComponent} from './view-patient/view-patient.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.scss']
})
export class PatientDetailsComponent implements OnInit {

  @Input() patientDataList: any = [];
  alertOptions: any = {keyboard: false, backdrop: 'static'};
  patientGridDataSource: GridDataResult;
  gridColumnsList: any[];
  /*gridData = products;*/
  /*gridReportData: any = [{data: [], total: 300}];*/
  /*defaultSortConfig: SortDescriptor[] = [{field: 'name', dir: 'asc'}];*/
  getEditPatientData: any = {};
  selectableSettings: SelectableSettings;
  public mySelection = [];
  gridPagersInfo = this.patientService.gridPagersInfo.sqGrid;
  sortingSettings: SortDescriptor[] = this.patientService.gridPagersInfo.sqGrid.sort;
  tooltipText: any = '';
  constructor(
    config: NgbTooltipConfig,
    private SQAlert: NgbModal,
    private patientService: PatientDetailsService,
    private el: ElementRef,
    private router: Router,
  ) {
    config.container = 'body';
    config.placement = 'top';
    this.gridColumnsList = [
      {field: 'FirstName', title: 'First Name', width: 100},
      {field: 'LastName', title: 'Last Name', width: 100},
      {field: 'Gender', title: 'Gender', width: 100},
      {field: 'DateOfBirth', title: 'Date Of Birth', width: 100},
      {field: 'HealthCardNumber', title: 'Health Card Number', width: 100},
      {field: 'HealthCardVersionCode', title: 'Health Card Version Code', width: 100}
    ];
  }

  /*public gridData: any[] = products;*/

  setSelectableSettings(): void {
    this.selectableSettings = {
      mode: 'single'
    };
  }
  logout(){
    localStorage.removeItem('TOKEN');
    this.router.navigateByUrl('/auth');
  }

  public pageChange(event: PageChangeEvent): void {
    this.gridPagersInfo.skip = event.skip;
    this.gridPagersInfo.pageSize = event.take;
    this.loadItems(event.take);
    this.mySelection = this.patientGridDataSource.data[0]['id'];
  }

  public onSortChange(sort: SortDescriptor[]) {
    this.sortingSettings = sort;
    this.patientDataList = orderBy(this.patientDataList, this.sortingSettings);
    this.loadItems();
    this.patientService.gridPagersInfo.sqGrid.sort = this.sortingSettings;
  }

  public loadItems(pageSize?: number): void {
    if (pageSize) {
      this.gridPagersInfo.pageSize = pageSize;
    } else {
      this.patientDataList = orderBy(this.patientDataList, this.sortingSettings);
    }
    this.patientGridDataSource = {
      data: this.patientDataList.slice(this.gridPagersInfo.skip, this.gridPagersInfo.skip + this.gridPagersInfo.pageSize),
      total: this.patientDataList.length
    };
    if (this.patientGridDataSource.data.length) {
      if (_.findIndex(this.patientGridDataSource.data, {id: this.patientService.selectedInfo.userInfo['id']}) > -1 && this.patientService.selectedInfo.userInfo['id']) {
        this.mySelection = [this.patientService.selectedInfo.userInfo['id']];
      } else {
        this.mySelection = [this.patientGridDataSource.data[0]['id']];
      }
    }
    this.patientService.gridPagersInfo.sqGrid = this.gridPagersInfo;
    setTimeout(() => {
      const selectedElement = document.querySelector('#sqGridElement tr.k-state-selected');
      if (selectedElement) {
        selectedElement.scrollIntoView();
      }
    }, 150);
  }

  onAddPatient() {
    const addSharedQueueModal = this.SQAlert.open(EditPatientComponent, this.alertOptions);
  }

  onEditPatient(event) {
    const editSharedQueueModal = this.SQAlert.open(EditPatientComponent, this.alertOptions);
    const labelData = event.dataItem;
    /*labelData['isCompany'] = true;
    labelData['children'] = this.labelService.getLabelList;*/
    /*this.labelService.OverviewLabelList = [labelData];*/
    /*editSharedQueueModal.componentInstance.getLabelList = [labelData];*/
    this.patientService.getEditPatientData = event.dataItem;
    /*editSharedQueueModal.result.then((res) => {
      if (res) {
        this.updateSource.emit('sqGridRefresh');
      }
    });*/
  }

  onViewPatient(event) {
    console.log(event);
    const editSharedQueueModal = this.SQAlert.open(ViewPatientComponent, this.alertOptions);
    // const labelData = event.dataItem;
    /*labelData['isCompany'] = true;
    labelData['children'] = this.labelService.getLabelList;*/
    /*this.labelService.OverviewLabelList = [labelData];*/
    /*editSharedQueueModal.componentInstance.getLabelList = [labelData];*/
    this.patientService.getViewPatientData = event;
    /*editSharedQueueModal.result.then((res) => {
      if (res) {
        this.updateSource.emit('sqGridRefresh');
      }
    });*/
  }

  onDeletePatient(event) {
    const rowData = event.dataItem;
    this.alertOptions.size = 'sm';
    // const queueId = rowData.id;
    /*const url = this.baseURL + 'api/administration/queues/' + queueId;*/
    const dialogContent = this.SQAlert.open(DialogContent, this.alertOptions);
    dialogContent.componentInstance.dialogMessage = 'Are you sure you want to delete?';
    dialogContent.componentInstance.dialogImgPath = 'assets/images/svg/ic_alert_outline_481px.svg';
    //dialogContent.componentInstance.dialogUniqueTypeId = 'Delete-Patient' + '';
    dialogContent.componentInstance.canceled.subscribe(() => {
      dialogContent.componentInstance.activeDialog.close();
      this.el.nativeElement.focus();
    });
    dialogContent.componentInstance.action.subscribe(() => {
      /*this.sharedQueueDetailsService.deleteSharedQueueUserAPI(url).then((response: any) => {
        this.updateSource.emit('sqGridRefresh');
        dialogContent.componentInstance.activeDialog.close();
      });*/
    });
  }

  ngOnInit() {

    this.patientDataList = sampleProducts;

    this.gridPagersInfo = this.patientService.gridPagersInfo.sqGrid;
    this.loadItems();
    /*this.gridReportData = {
      data: this.gridData,
      total: 300
    };*/
  }

}
