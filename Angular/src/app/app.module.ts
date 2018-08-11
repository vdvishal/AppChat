import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule} from '@angular/common/http';

import { AppService } from './app.service';

import { RouterModule, Routes } from '@angular/router';

import { CookieService } from 'ngx-cookie-service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup } from '@angular/forms';


import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ChatRoomsComponent } from './chat-rooms/chat-rooms.component';
import { CreateRoomComponent } from './create-room/create-room.component';
import { ChatMessagesComponent } from './chat-messages/chat-messages.component';
import { AuthGuard } from './auth.guard';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { EditRoomComponent } from './edit-room/edit-room.component';
import { RouteGuard } from './route.guard';
import { SocketService } from './socket.service';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    SignUpComponent,
    ChatRoomsComponent,
    CreateRoomComponent,
    ChatMessagesComponent,
    ForgotPasswordComponent,
    EditRoomComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot([
      {path:'login',component:LandingPageComponent,canActivate:[RouteGuard]},
      {path: '', redirectTo: 'login', pathMatch: 'full' },
      {path:'signup',component:SignUpComponent,canActivate:[RouteGuard]},
      {path:'forgotpassword',component:ForgotPasswordComponent},
      {path:'chatroom',component:ChatRoomsComponent,canActivate:[AuthGuard]},
      {path:'createroom',component:CreateRoomComponent,canActivate:[AuthGuard]},
      {path:'chatroom/edit/:item.roomId',component:EditRoomComponent},
      {path:'chatroom/:item.roomId',component:ChatMessagesComponent,canActivate:[AuthGuard]}
    ])
  ],
  providers: [AppService,CookieService,AuthGuard,SocketService],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
