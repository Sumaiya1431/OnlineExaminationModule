import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/operator';
import { Exam } from './exam.model';
@Injectable({
  providedIn: 'root'
})
export class ExamService {
  selectedExam: Exam;
  exams: Exam[];
  readonly baseURL = 'http://localhost:3000/exams';
  constructor(private http: HttpClient) { }

  postExam(ex: Exam) {
    return this.http.post(this.baseURL, ex);
  }
}
