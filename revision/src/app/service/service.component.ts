import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {

  constructor(private services:ServicesService) { }
userdata: any =[];
  ngOnInit(): void {
 this.services.getUser().subscribe(data=>{this.userdata=data})
    
  }

}
