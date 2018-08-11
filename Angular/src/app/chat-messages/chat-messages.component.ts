import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '../../../node_modules/@angular/router';
import { AppService } from '../app.service';
import { CookieService } from 'ngx-cookie-service';
import { SocketService } from '../socket.service';
import { ToastrService } from '../../../node_modules/ngx-toastr';



@Component({
  selector: 'app-chat-messages',
  templateUrl: './chat-messages.component.html',
  styleUrls: ['./chat-messages.component.css']
})
export class ChatMessagesComponent implements OnInit {

  public roomInfo = [];
  public userNotify:String;
  public userInfo:any;
  public msgText: any;
  public roomId:any;
  public messageList=[];
  public previousMessage:any =[];
  public typingmsg:string;

  constructor(
    private notice: ToastrService,private socket:SocketService,private appService:AppService,private router:Router,private _route:ActivatedRoute) { }

  ngOnInit() {
    this.notify();
    this.newMsg();
    this.typingEvent();

    this.userInfo = this.appService.getUserInfoFromLocalstorage();
    
    this.roomId = this._route.snapshot.paramMap.get("item.roomId");

    this.appService.getRoomInfo(this.roomId)
    .subscribe(response =>{
      if(response.status === 200) {
        this.roomInfo = response.data;
      }
      else {
        this.notice.error(response.message)
      }
    })

    this.appService.getAllChats(this.roomId)
    .subscribe(result => {
      if(result.status===200) {
        this.messageList = result.data
      }
      else {
        this.messageList = [];
      }
    })
  }

  public leaveRoom = (info) => {
    this.socket.leaveRoom(info)
    this.router.navigate(['/chatroom'])
    this.notify();
    this.notice.error("You have left the room")
  }

  public notify:any = () => {
    this.socket.notify()
    .subscribe((msg)=>{
      this.userNotify = msg;
      setTimeout(() => {
        this.userNotify = null;
      }, 4000);
    })
  }

  public sendMsg:any = () => {
  
    if(this.msgText){
      let msg = {
        senderName: this.userInfo.firstName,
        createdOn:Date.now(),
        message:this.msgText,
        roomId: this.roomId
      }
      this.socket.chatMsg(msg);
      this.msgText="";
    }
  }

  public newMsg:any = () => {
    this.socket.newMsg()
    .subscribe((data)=>{
      this.messageList.push(data)
    })
  }

  onKeypress(event) {
    let data = {
      senderName: this.userInfo.firstName,
      roomId: this.roomId
    }
    this.socket.typing(data)
  }

  
  
  public typingEvent:any = () => {   
    this.socket.typingEvent().subscribe((data)=>{
      this.typingmsg = data
      setTimeout(() => {
        this.typingmsg = null;
      }, 1500);
    })
  }
  
}
