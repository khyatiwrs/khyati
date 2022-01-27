import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from './User';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private _url: string = "./assets/Users.json";
  constructor(private http : HttpClient) { }

  getUsers(): Observable<IUser[]>{
    return this.http.get<IUser[]>(this._url);
  }

  getData(){
    return this.http.get('http://localhost:3000/users');
  }
}
