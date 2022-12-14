import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {

  responseData:any=[]
  userId:any=""
  constructor(private api:ApiService){
    this.userId=localStorage.getItem("userInfo")
    console.log(this.userId)
    let data:any={"id":this.userId}
    this.api.getUserById(data).subscribe(
      (response:any)=>{
        console.log(response);
        this.responseData=response
      }
    )
  }
}