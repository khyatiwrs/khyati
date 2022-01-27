import { Component, OnInit } from '@angular/core';
import{ServicesService} from '../services.service';
import { IUser } from '../User';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {
  Users: IUser[] = [];
  
  constructor(private _userService:ServicesService) { }


  ngOnInit(): void {
    this._userService.getUsers()
    .subscribe(data => this.Users = data);
  }

}
