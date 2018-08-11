import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '../../../node_modules/@angular/router';
import { ToastrService } from '../../../node_modules/ngx-toastr';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  public email:any
  public mail:any
  public passInfo:any
  public tokeninfo:any

  constructor(private notify: ToastrService,private appService:AppService,private router:Router) { }

  ngOnInit() {
  }

  submitted = false;
  show = false;
 
  onSubmit() { this.submitted = null }

  public token:any = () => {
    this.show = true;
  }

  public forgotpassword:any = () => {
    if(!this.email) {
      this.notify.warning("Enter email")
    }
    else{
      this.show = true;

      let data = {
        email: this.email
      }
  
      this.appService.forgotpassword(data)
      .subscribe((response) =>{
        if(response.status === 200) {
          this.notify.success(response.message)
        }
        else {
          this.notify.error(response.message)
        }
      })
    }

  }

  public newPassword:any = () => {
    if(!this.mail){
      this.notify.warning("Enter email")
    }
    else if (!this.passInfo) {
      this.notify.warning("Enter new password")
    }
    else{
      let data = {
        email: this.mail,
        password: this.passInfo
      }
  
      let param = {
        tokeninfo: this.tokeninfo
      }
  
      
      this.appService.resetpassword(param,data)
      .subscribe((response) =>{
        if(response.status === 200) {
          this.router.navigate(['/login'])
          this.notify.success(response.message)
        }
      })
    }

  }


  
}
