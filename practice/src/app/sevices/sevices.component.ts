import { Component, OnInit } from '@angular/core';
import{ServicesService} from '../services.service'
@Component({
  selector: 'app-sevices',
  templateUrl: './sevices.component.html',
  styleUrls: ['./sevices.component.scss']
})
export class SevicesComponent implements OnInit {

  constructor( private data:ServicesService) { }
  info : any =[];
  ngOnInit(): void {
    this.data.getData().subscribe(data =>{
      this.info = data;
      console.log(data);
      
    })
  }

}
