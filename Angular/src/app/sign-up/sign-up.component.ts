import { Component, OnInit } from '@angular/core';
import { Router} from '../../../node_modules/@angular/router'
import { AppService } from '../app.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor( 
    public appService: AppService,
    public router: Router
  ) { }

  ngOnInit() {
      setTimeout(() => {
        this.router.navigate(['/login'])
        console.log("navigate");
        
      }, 2000);
      
  }


}
