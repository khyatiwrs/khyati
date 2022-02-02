import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  login = new FormGroup(
    {
      userName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]{2,}')]),
      password: new FormControl('', [Validators.required, Validators.pattern('[0-9]{10}')])
    })
    onSubmit() {
      console.log(this.login.value);
    }
    get uname() {
      return this.login.get('userName');
    }
    get password() {
      return this.login.get('password');
    }
}
