import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent implements OnInit {

  constructor(private services:ServicesService) { }
  d_data: any = [];
  ngOnInit(): void {
    this.services.getData().subscribe(data=>{
      this.d_data = data;
    })
  }

}
