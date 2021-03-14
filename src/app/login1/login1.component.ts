import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { Router } from '@angular/router';
//import { User } from '../dataclasses/user';

@Component({
  selector: 'app-login1',
  templateUrl: './login1.component.html',
  styleUrls: ['./login1.component.css']
})
export class Login1Component implements OnInit {

  loginForm1!: FormGroup;
  isSubmitted: boolean  =  false;

  constructor(private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.loginForm1  =  this.formBuilder.group({
      logEmail: ['', Validators.required],
      logPassword: ['', Validators.required]

  });
  }


  get formControls() { return this.loginForm1!.controls; }


  loginSubmit(){

    console.log("Form Submission OK!");
    console.log(this.loginForm1!.value);
    this.isSubmitted = true;
    if(this.loginForm1!.invalid){
      return;
    }
    //this.authService.login(this.loginForm.value);
    this.router.navigateByUrl('/admin');
  }

}
