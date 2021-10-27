import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ExamService } from '../shared/exam.service';
import { Exam } from '../shared/exam.model';

declare var M: any;

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css'],
  providers: [ExamService]
})
export class ExamComponent implements OnInit {

  constructor(private examService: ExamService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.examService.selectedExam = {
      _id: "",
      name:  "",
      designation: "",
      post: "",
      duration: null,
      date_time:null,
      no_of_cand:null,
      no_of_ques:null,
      no_of_vac:null,
      dept_id:"",
      password:""
    }
  }

  onSubmit(form: NgForm) {
   // if (form.value._id == "") {
      this.examService.postExam(form.value).subscribe((res) => {
        this.resetForm(form);
        //this.refreshEmployeeList();
        M.toast({ html: 'Saved successfully', classes: 'rounded' });
      });
    //}
   /* else {
      this.employeeService.putEmployee(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshEmployeeList();
        M.toast({ html: 'Updated successfully', classes: 'rounded' });
      });
    }*/
  }
}
