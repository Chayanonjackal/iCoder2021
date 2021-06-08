import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css'],
  providers: [MessageService]
})
export class AddStudentComponent implements OnInit {

  // emailFormControl = new FormControl();
  addStudentFormGroup = new FormGroup ({
    email: new FormControl(),
    name: new FormControl(),
    tel: new FormControl()
  })


  constructor(public http:HttpClient,private messageService: MessageService) { }

  ngOnInit(): void {
  }
  saveStudent(){
    const student = this.addStudentFormGroup.value;
    this.http.post('/training-demo/student',student).subscribe(
      response=>{
        console.log('บัยทึกสำเร็จ')
        this.messageService.add({severity:'success', summary: 'บันทึกสำเร็จ', detail: 'เพิ่มข้อมูลเข้าสู่ระบบแล้ว'});
      }
    )
  }

}
