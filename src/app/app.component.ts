import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('f') myform
  defaultQuestion = 'pet'
  answar = '';
  
  checkSubmitted : boolean = false;

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  // onSubmit(form:NgForm){
  //   console.log("submitted!");
  //   console.log(form);
  // }
  
  // Another approach
  onSubmit(form:NgForm){
    console.log("submitted!");
    console.log(this.myform);
    this.checkSubmitted = true;
  }
}
