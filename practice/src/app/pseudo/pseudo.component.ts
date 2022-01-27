import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';


@Component({
  selector: 'app-pseudo',
  templateUrl: './pseudo.component.html',
  styleUrls: ['./pseudo.component.scss']
})
export class PseudoComponent implements OnInit {
  basicForm!: FormGroup;

  constructor(private fb: FormBuilder) { 
     this.basicForm = this.fb.group({
    fname:[ '',Validators.required],
    emaill: ['',[Validators.required,Validators.email]],
    mnumber:['',[Validators.required,Validators.pattern('[0-9]{10}')]],
    agee:['',[Validators.required,Validators.pattern('[0-9]')]],
    address: this.fb.array([this.addAdds()]),
    marks: this.fb.array([this.addMarks()])
  })
  }

  ngOnInit(): void {
  }
  get addForms(){
    return this.basicForm.get('address') as FormArray
    }
    addAdds(){
    return this.fb.group({
      add:[]
    });
    }
    addAdd(){
    this.addForms.push(this.addAdds());
    
    }
    
    get markForms(){
    return this.basicForm.get('marks') as FormArray
    }
    
    addMarks(){
    return this.fb.group({
      subject: ['',[Validators.required]],
      mark:['',[Validators.required]]
    
    });
    
    
    }
    addMark(){
    this.markForms.push(this.addMarks());
    
    }
    
    deleteMarks(i: number){
    this.markForms.removeAt(i)
    }
    submitForm()
    {
    console.log(this.basicForm.value);
    }
    get fname(){
    return this.basicForm.get('fname');
    }
    get emaill(){
    return this.basicForm.get('emaill');
    }
    get mnumber(){
    return this.basicForm.get('mnumber');
    }
    get agee(){
    return this.basicForm.get('agee');
    }
    
}

