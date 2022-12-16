import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-user-complaint',
  templateUrl: './view-user-complaint.component.html',
  styleUrls: ['./view-user-complaint.component.css']
})
export class ViewUserComplaintComponent {

  complaintData:any=[]
  constructor(private api:ApiService){
    let data={"userId":localStorage.getItem("userInfo")}
    
    this.api.viewComplaintById(data).subscribe(
      (response:any)=>{
        console.log(response);
        this.complaintData=response
      }
    )
  }

}