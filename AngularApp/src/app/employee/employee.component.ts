import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { EmployeeService } from '../shared/employee.service';
import { Employee } from '../shared/employee.model';

declare var M: any;

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [EmployeeService]
})
export class EmployeeComponent implements OnInit {
allnames = [{
    name_id: 1,
    name: 'Jhon'
}, {
    name_id: 2,
    name: 'Chena'
}, {
    name_id: 3,
    name: 'Jack'
}]
model: any = {};
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.resetForm();
    this.refreshEmployeeList();
	this.model.name_id = 2;
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.employeeService.selectedEmployee = {
      _id: "",
      name: "",
	  dobdate:"",
	  date: "",
      position: "",
      office: "",
      salary: null
    }
  }

  onSubmit(form: NgForm) {
    if (form.value._id == "") {
      this.employeeService.postEmployee(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshEmployeeList();
        M.toast({ html: 'Saved successfully', classes: 'rounded' });
      });
	  console.log(form.value);
    }
    else {
      this.employeeService.putEmployee(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshEmployeeList();
        M.toast({ html: 'Updated successfully', classes: 'rounded' });
      });
    }
  }

  refreshEmployeeList() {
    this.employeeService.getEmployeeList().subscribe((res) => {
      this.employeeService.employees = res as Employee[];
    });
  }

onEdit(emp: Employee) {
function changeDateFormat(inputDate){  // expects Y-m-d
    var splitDate = inputDate.split('-');
    if(splitDate.count == 0){
        return null;
    }

    var year = splitDate[0];
    var month = splitDate[1];
    var day = splitDate[2]; 

    //return month + '-' + day + '-' + year;
	 return year + '-' + month + '-' + day;
}
	 // console.log("dob:"+emp.dobdate);
	  // var dobdate = changeDateFormat(emp.dobdate);
	  var newDate = changeDateFormat(emp.date);
	  console.log(newDate);
	  this.employeeService.selectedEmployee._id=emp._id;
	  this.employeeService.selectedEmployee.name=emp.name;
	  this.employeeService.selectedEmployee.dobdate=emp.dobdate
	  this.employeeService.selectedEmployee.date=newDate;
	  this.employeeService.selectedEmployee.position=emp.position;
	    this.employeeService.selectedEmployee.office=emp.office;
	   this.employeeService.selectedEmployee.salary=emp.salary;
	 //  console.log(this.employeeService.selectedEmployee.date);
   // this.employeeService.selectedEmployee = emp;
	console.log(this.employeeService.selectedEmployee);
  }

  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.employeeService.deleteEmployee(_id).subscribe((res) => {
        this.refreshEmployeeList();
        this.resetForm(form);
        M.toast({ html: 'Deleted successfully', classes: 'rounded' });
      });
    }
  }

}
