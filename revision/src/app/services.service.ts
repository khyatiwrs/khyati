import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private httpClient : HttpClient) { }

  getUser()
  {
    return this.httpClient.get('../assets/user.json');
  }
  getData()
  {
    return this.httpClient.get('http://localhost:3000/data');
  }
}
