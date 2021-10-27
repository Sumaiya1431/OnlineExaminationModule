import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/operator';
import { QbDept } from './qb-dept.model';

@Injectable({
  providedIn: 'root'
})
export class QbDeptService {
  selectedQbDept: QbDept;
  qbDepts: QbDept[];
  readonly baseURL = 'http://localhost:3000/qb_depts';

  constructor(private http: HttpClient) { }
  postQbDept(ex: QbDept) {
    return this.http.post(this.baseURL, ex);
  }
}
