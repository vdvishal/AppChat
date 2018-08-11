import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';
import { AppService } from '../app.service';
import { CookieService } from 'ngx-cookie-service';
import { ToastrService } from 'ngx-toastr';




@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  public email: any;
  public password: any;


  public mail: any;
  public newpassword: any;
  public firstName: String
  public lastName:String
  public number:Number


  

  constructor(
    public appService: AppService,
    public router: Router,
    private cookie: CookieService,
    private notify: ToastrService
  ) { }
  
  ngOnInit() {
  }

  submitted = false;
 
  onSubmit() { this.submitted = null }

  public login: any = () => {
    if(!this.email) {
      this.notify.warning("enter email")
    }
    else if(!this.password) {
      this.notify.warning("enter password")
    }
    else {
      let data = {
        email: this.email,
        password: this.password
      }
      this.appService.login(data)
      .subscribe((response) => {
        if (response.error.status === 400){
          this.notify.error(response.error.message)
          console.log("response");
          
        }
        else if(response.status === 200) {
            localStorage.setItem('authToken',response.data.token)
            this.appService.setUserInfoInLocalStorage(response.data.userDetails)
            this.router.navigate(['/chatroom']);
        }
        else {
          this.notify.error(response.message)
        }
      },
      error => {
       if(error.status == 400){
        this.notify.error(error.error.message);
       }
   }
  )
    }
  }

  public signup:any =  () => {
    
    let data :any = {
      email: this.mail,
      password:this.newpassword,
      firstName:this.firstName,
      lastName:this.lastName,
      number:this.number
    }

    this.appService.signup(data)
      .subscribe((response) => {
        if(response.status === 200) {
          this.router.navigate(['/signup']);
  }
  else {
    this.notify.warning(response.message)

  }
})
  }

}
