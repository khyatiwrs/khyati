import { Component, OnInit } from '@angular/core';
import{ ContectsService} from '../contects.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  

  constructor(private ContectsService:ContectsService) { }
  contectList = [] as any;

  ngOnInit() {
    this.contectList =this.ContectsService.getContect();

  }
 
}
