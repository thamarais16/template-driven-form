import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit, AfterViewInit {

  @ViewChild('contactForm', { static: false }) contactForm: NgForm;
  states:(string | number)[] = [
    "Tamil Nadu",
    "Kerala",
    "Andhra Pradesh"
  ];

  contact: any = {};

  constructor() { }

  ngOnInit() {
    // this.contact ={
    //   email: "thamarai@gmail.com",
    //   password: "Host@123",
    //   address: {
    //     line1: "plot: 2, seevaram",
    //     line2: "perungudi",
    //     city: "chennai",
    //     state: "Tamil Nadu",
    //     zip: "600096"
    //   },
    //   toc: true
    // }
    this.contact ={
      email: "",
      password: "",
      address: {
        line1: "",
        line2: "",
        city: "",
        state: "",
        zip: ""
      },
      toc: false
    }
    
  }

  ngAfterViewInit(){
    setTimeout(()=>{
      this.contactForm.setValue(this.contact);
    });

    setTimeout(()=>{
      this.contactForm.controls['email'].setValue('abc@gmail.com');
      this.contactForm.controls['password'].setValue('Host@123')
      let addr = {
        line1: "plot: 2, seevaram",
        line2: "perungudi",
        city: "chennai",
        state: "Tamil Nadu",
        zip: "600096"
      }
      this.contactForm.controls['address'].patchValue(addr);
      this.contactForm.controls['toc'].setValue(true);
    }, 5000);
    
  }

  onSubmit(form){
    alert(JSON.stringify(form.value));
  }

}