import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContectsService {

  constructor() { }
  getContect(){
    const contectList=[
      {contectName:'khyati',contectId:1},
      {contectName:'bhavin',contectId:2},
      {contectName:'hemal',contectId:3},
      {contectName:'harshil',contectId:4}

    ];
    return contectList;
  }
}
