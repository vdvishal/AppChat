import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';
import { AppService } from '../app.service';
import { ToastrService } from '../../../node_modules/ngx-toastr';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.css']
})
export class CreateRoomComponent implements OnInit {

  public title:String;
  public about:String;
  public isActive:Boolean;
  public submitted:Boolean = false
  public createdBy:String;
  public userInfo:any

  constructor(private notify: ToastrService,public appService: AppService,
    public router: Router) { }

  ngOnInit() {
    
  }

 
  onSubmit() { this.submitted = true; }

  public logout:any = () => {
    this.appService.logout();
    this.router.navigate(['/login'])
    this.notify.success("Logged out successfully")
  }

  public createRoom:any = () => {
    this.userInfo = this.appService.getUserInfoFromLocalstorage();
    let data = {
      title: this.title,
      about: this.about,
      isActive: this.isActive,
      creator: this.userInfo.firstName,
      creatorId: this.userInfo.userId,
      modifiedBy: 'none'
    }
    this.appService.createRoom(data)
    .subscribe((result) =>{
      if(result.status===200){
        this.router.navigate(['/chatroom']);
        this.notify.success(result.message)
      }
      else {
        this.notify.error(result.message)
      }
    })
  }
}
