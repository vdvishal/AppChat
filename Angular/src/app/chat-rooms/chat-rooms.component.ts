import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '../../../node_modules/@angular/router';
import { AppService } from '../app.service';
import { CookieService } from 'ngx-cookie-service';
import { SocketService } from '../socket.service';
import { ToastrService } from '../../../node_modules/ngx-toastr';


@Component({
  selector: 'app-chat-rooms',
  templateUrl: './chat-rooms.component.html',
  styleUrls: ['./chat-rooms.component.css']
})
export class ChatRoomsComponent implements OnInit {

  public list:any = [];
  public userInfo:any;
  public authToken:any;
  

  constructor(public appService: AppService,
    public router: Router,
    public cookie: CookieService,
  public _route: ActivatedRoute,
public socket:SocketService,
private notify: ToastrService) { }

  ngOnInit(
    
  ) {
    this.userInfo = this.appService.getUserInfoFromLocalstorage();
    // console.log(this.userInfo);
    this.authToken = `Bearer ${localStorage.getItem('authToken')}`    

      this.appService.getAllRooms(this.authToken)
      .subscribe((response) =>{
        if(response.status === 200) {
          this.list = response.data;
        }
        else {
          this.notify.error(response.message)
        }
      })  

      
  }


  public logout:any = () => {
    this.appService.logout();
    this.router.navigate(['/login'])
    this.notify.success("Logged out successfully")
  }

  public deleteRoom:any = (data) => {
    let roomInfo = {
      roomId : data,
      userId: this.userInfo.userId
    }
    this.appService.deleteRoom(roomInfo).subscribe((response)=> {
        if(response.status === 200) {
          this.notify.success(response.message)
  }
  else {
    this.notify.error(response.message)
    
  }
      
    })
  }


  public joinRoom:any = (data) => {
    let info = {
      room:data.roomId,
      roomData:data,
      userName:this.userInfo.firstName,
      userId:this.userInfo.userId
    }
    this.socket.joinRoom(info)
  }


}
