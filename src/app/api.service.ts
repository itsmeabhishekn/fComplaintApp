import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(private http:HttpClient) { }

  registerUser=(dataToSend:any)=>{return this.http.post("http://localhost:8080/uregister",dataToSend)}
  searchUser=(dataToSend:any)=>{return this.http.post("http://localhost:8080/usearch",dataToSend)}
  getUserById=(dataToSend:any)=>{return this.http.post("http://localhost:8080/ubyid",dataToSend)}
  addComplaintById=(dataToSend:any)=>{return this.http.post("http://localhost:8080/addComplaint",dataToSend)}
  viewComplaintById=(dataToSend:any)=>{return this.http.post("http://localhost:8080/getComplaint",dataToSend)}
}

