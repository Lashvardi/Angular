import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(public qwrqwrqwrqwr: NzMessageService) {
    
  };
  userRegisterData = {
    userPassword: '',
    userEmail: '',
  };

  loginUser() {
    this.qwrqwrqwrqwr.error("Server Error")
  }
}
