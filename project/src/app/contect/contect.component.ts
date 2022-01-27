import { Component, OnInit } from '@angular/core';
import{ ContectsService} from '../contects.service';

@Component({
  selector: 'app-contect',
  templateUrl: './contect.component.html',
  styleUrls: ['./contect.component.css']
})
export class ContectComponent implements OnInit {

  constructor(private ContectsService:ContectsService) { 
  
  }
  contectList = [] as any;
  ngOnInit(): void {
    this.contectList =this.ContectsService.getContect();
  }

}
