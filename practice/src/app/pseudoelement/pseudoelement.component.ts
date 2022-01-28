import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-pseudoelement',
  templateUrl: './pseudoelement.component.html',
  styleUrls: ['./pseudoelement.component.scss']
})
export class PseudoelementComponent implements OnInit {
  title = 'Routing_Example';

  constructor() { }

  ngOnInit(): void {
  }
  signupForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]{2,}')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    age: new FormControl('', [Validators.required, Validators.maxLength(3)]),
    gender: new FormControl('', Validators.required)
  })
  userSignUp() {
    console.log(this.signupForm);

  }
  get user() {
    return this.signupForm.get('name');

  }
  get email() {
    return this.signupForm.get('email');

  }
  get age() {
    return this.signupForm.get('age')
  }
}

