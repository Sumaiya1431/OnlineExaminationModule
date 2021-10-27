import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ExamService } from '../../shared/exam/exam.service';
import { Exam } from '../../shared/exam/exam.model';

import {  ElementRef, Input } from '@angular/core';
//import the file uploader plugin
import {  FileUploader } from 'ng2-file-upload/ng2-file-upload';
//import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import "rxjs/add/operator/do";
import { map } from "rxjs/operators";
//define the constant url we would be uploading to.
const URL = 'http://localhost:3000/candidate';
 
declare var M: any;

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css'],
  providers: [ExamService]
}) 
export class ExamComponent implements OnInit {
  public uploader:FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});
  constructor(private examService: ExamService,private http:HttpClient , private el: ElementRef) { }

  ngOnInit() {
    this.resetForm();
    this.upload();
    this.uploader.onAfterAddingFile = (file)=> { file.withCredentials = false; };
       //overide the onCompleteItem property of the uploader so we are 
       //able to deal with the server response.
       this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
            console.log("ImageUpload:uploaded:", item, status, response);
        };
  }
  upload() {
    let inputEl: HTMLInputElement = this.el.nativeElement.querySelector('#photo');
    console.log("iam+ "+inputEl);
    let fileCount: number = inputEl.files.length;
    console.log('file name:' + inputEl.files.item(0).name);
    let formData = new FormData();
    //if (fileCount > 0) { // a file was selected
        //for (let i = 0; i < fileCount; i++) {
            formData.append('photo', inputEl.files.item(0));
            console.log('file name:' + inputEl.files.item(0))
            //formData.append(inputEl.files.item(0));
       // }
        this.http
            .post(URL, formData).
            pipe(map((res:any) => res)).subscribe(
                (success) => {
                 //alert(success._body);
              },
                //(error) => alert(error)
            );

    }
  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.examService.selectedExam = {
     // _id: "",
      name:  "",
      designation: "",
      // post: "",
      duration: null,
      date: null,
      time: "",
      // no_of_cand:null,
       no_of_ques:null
      // no_of_vac:null,
      // dept_id:"",
      // password:""
    }
  }

  onSubmit(form: NgForm) {
   // if (form.value._id == "") {
      this.examService.postExam(form.value).subscribe((res) => {
        console.log(form.value);
        this.resetForm(form);
        this.upload();
        //this.refreshEmployeeList();
       // M.toast({ html: 'Saved successfully', classes: 'rounded' });
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