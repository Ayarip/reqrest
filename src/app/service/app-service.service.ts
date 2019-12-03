import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {
  PostLogin(value: any) {
    throw new Error("Method not implemented.");
  }

  constructor(private http:HttpClient) { }
  
  

  loginsuccessful(email,password){
    let link:string = `https://reqres.in/api/login?`
    return this.http.post(link)
  }


  private users ={

  }

}
