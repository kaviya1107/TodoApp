import { Component,OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  taskarray=[{
    taskname:'brush teeth', isChecked:false
  }]
  constructor(){

  }

  ngOnInit():void{

  }

  onSubmit(form: NgForm){
    console.log(form);
    this.taskarray.push({
      taskname:form.controls['task'].value,
      isChecked:false
    })
    //reset
    form.reset();
    
  }
   onDelete(index:number){
    this.taskarray.splice(index,1);
   }
  //  OnClick(index:number){
  //   console.log(this.taskarray);
  //   this.taskarray[index].isChecked=!this.taskarray[index].isChecked
  //  }
}
