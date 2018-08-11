import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '../../../node_modules/@angular/router';
import { AppService } from '../app.service';
import { ToastrService } from '../../../node_modules/ngx-toastr';

@Component({
  selector: 'app-edit-room',
  templateUrl: './edit-room.component.html',
  styleUrls: ['./edit-room.component.css']
})
export class EditRoomComponent implements OnInit {

  public title:String;
  public about:String;
  public isActive:Boolean;
  public submitted:Boolean = false
  public userInfo:any
  


  constructor(private notify: ToastrService,public appService: AppService,
    public router: Router,private _route:ActivatedRoute) { }

  ngOnInit() {
    
  }

 
  onSubmit() { this.submitted = true; }

  
  public logout:any = () => {
    this.appService.logout();
    this.router.navigate(['/login'])
    this.notify.success("Logged out successfully")
  }
  
  public editRoom:any = () => {
    let roomId = this._route.snapshot.paramMap.get("item.roomId");
    this.userInfo = this.appService.getUserInfoFromLocalstorage();
    let data = {
      title: this.title,
      about: this.about,
      isActive: this.isActive,
      modifiedBy: this.userInfo.firstName,
      roomId: roomId
    }
    this.appService.editRoom(data)
    .subscribe((result) =>{
      if(result.status===200){
        this.notify.success(result.message)
        this.router.navigate(['/chatroom']);
      }
      else {
        this.notify.error(result.message)
        
      }
    })
  }
}
