import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms'

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.scss']
})
export class ReactiveformComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  registration = new FormGroup(
    {
      firstName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]{2,}')]),
      phone_number: new FormControl('', [Validators.required, Validators.pattern('[0-9]{10}')]),
      email: new FormControl('', [Validators.required, Validators.email]),
      gender: new FormControl('', [Validators.required]),
      address: new FormArray([this.addAdds()]),
    })

  onSubmit() {
    console.log(this.registration.value);
  }
  get fname() {
    return this.registration.get('firstName');
  }
  get email() {
    return this.registration.get('email');
  }
  get pnumber() {
    return this.registration.get('phone_number');
  }
  get gender() {
    return this.registration.get('gender');
  }
  get addForms(){
    return this.registration.get('address') as FormArray
  }
  addAdds(){
    return this.fb.group({
      add:[]
    });
  }
  addAdd(){
    this.addForms.push(this.addAdds());
  
  }
}
