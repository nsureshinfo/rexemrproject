import { Injectable } from '@angular/core';
import {SortDescriptor} from '@progress/kendo-data-query';

@Injectable({
  providedIn: 'root'
})
export class PatientDetailsService {

  constructor() { }
  defaultSortConfig: SortDescriptor[] = [{field: 'name', dir: 'asc'}];
  selectedInfo = {labelInfo: {}, userInfo: {}, companyInfo: {}, faxNumberList: {}, via: 'labelPage'};
  getEditPatientData: any = {};
  getViewPatientData: any = {};
  gridPagersInfo = {
    userGrid: {pageSize: 10, skip: 0, sort: this.defaultSortConfig},
    sqGrid: {pageSize: 10, skip: 0, sort: this.defaultSortConfig}
  };
}
