import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { HttpErrorResponse, HttpParams,HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {RequestOptions,Headers, Http} from '@angular/http';
import { CookieService } from '../../node_modules/ngx-cookie-service';
import { ToastrService } from '../../node_modules/ngx-toastr';



@Injectable({
  providedIn: 'root'
})
export class AppService {
  
  public baseUrl = "http://localhost:3000/api/v1"
  
  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/x-www-form-urlencoded',
    })
  };

  
  
  
  // private newHeaders =  
  

  constructor(private http:HttpClient,private notify: ToastrService) { }

  

  // private handleError(error: HttpErrorResponse) {
  //   if (error.error instanceof ErrorEvent) {
  //     // A client-side or network error occurred. Handle it accordingly.
  //     console.error('An error occurred:', error.error.message);
  //     this.notify.warning(error.error.message)
  //   } else {
  //     // The backend returned an unsuccessful response code.
  //     // The response body may contain clues as to what went wrong,
  //     console.error(
  //       `Backend returned code ${error.status}, ` +
  //       `body was: ${error.message}`);
  //       this.notify.warning( `${error.message}`)
  //   }
  //   // return an observable with a user-facing error message
  //   return throwError(
  //     'Something bad happened; please try again later.');
  // };

  public setUserInfoInLocalStorage = (data) =>{
    localStorage.setItem('userInfo', JSON.stringify(data))
  }

  public getUserInfoFromLocalstorage = () => {
    return JSON.parse(localStorage.getItem('userInfo'));
  }

  public login(data): Observable<any> {
    const params = new HttpParams()
    .set('email', data.email)
    .set('password', data.password);
    return this.http.post(`${this.baseUrl}/users/login`,params)
  } 

  public signup(data): Observable<any> {
    const params = new HttpParams()
    .set('email', data.email)
    .set('password', data.password)
    .set('firstName',data.firstName)
    .set('lastname',data.lastName)
    .set('number',data.number)

    return this.http.post(`${this.baseUrl}/users/signup`,params)

  }

  public logout():any {
    localStorage.removeItem('authToken');
 }

 public forgotpassword(data):any {
   return this.http.post(`${this.baseUrl}/users/resetpassword`,data)
 }

 public resetpassword(param,data):any {
   return this.http.post(this.baseUrl + '/users/resetpassword/' + param.tokeninfo,data)
 }

  public getAllRooms(token):any {
    return this.http.get(`${this.baseUrl}/chat/allchatrooms`,{headers:new HttpHeaders({'Authorization':token})})
 }
 
  public createRoom(data): Observable<any> {
    return this.http.post(`${this.baseUrl}/chat/newroom`,data,{headers:new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem('authToken')})})
  }

  public editRoom(data):any {
    const info = new HttpParams()
    .set('title', data.title)
      .set('about', data.about)
      .set('isActive', data.isActive)
      .set('modifiedBy',data.modifiedBy)
    return this.http.post(this.baseUrl + '/chat/edit/'+ data.roomId,info,{headers:new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem('authToken')})})
  }

  public deleteRoom(data):any{
    return this.http.post(`${this.baseUrl}/chat/deleteroom/${data.roomId}`,data,{headers:new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem('authToken')})})
  }

  public getRoomInfo(data):any {
    return this.http.get(`${this.baseUrl}/chat/allchatrooms/${data}`,{headers:new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem('authToken')})})
  }
  
  public getAllChats(data):any {
    return this.http.get(`${this.baseUrl}/chat/allchatrooms/messages/${data}`,{headers:new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem('authToken')})})
  }

  
}
