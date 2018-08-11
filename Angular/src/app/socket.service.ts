import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { HttpClient } from '../../node_modules/@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private url = 'http://localhost:3000/'
  private socket;

  constructor(private http:HttpClient) { 
    this.socket = io(this.url);
   }
  
  
  public joinRoom:any = (info) => {
     this.socket.emit('join-room',info)
       }
  
  public notify:any = () => {

    return Observable.create((observer) => {

      this.socket.on('notify',data =>{

        observer.next(data);

      }); 
    });
  }

  public chatMsg:any = (data) => {
    this.socket.emit('chat-msg',data);
  }

  public leaveRoom:any = (data) => {
    this.socket.emit('leave-room',data)
  }

  public newMsg:any = () => {
    return Observable.create((observer) => {
      this.socket.on('new-msg',data => {
        observer.next(data);
      })
    })
  }

  public typing:any = (data) => {
    this.socket.emit("typing",data)
  }

  public typingEvent:any = () => {
    return Observable.create((observer) => {
    this.socket.on('typing-msg',data => {
      observer.next(data);
    })
  })
}

}
