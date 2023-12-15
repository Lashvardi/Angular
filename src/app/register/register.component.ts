import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  // აქ შემიძლია გამოვიძახო ჩემი მოდულის მიერ მოწოდებული სერვისები
  constructor(public message: NzMessageService) {}
  userRegisterData = {
    userFirstName: '',
    userLastName: '',
    userPassword: '',
    userEmail: '',
  };

  registerUser() {
    this.message.success('User Registered');
  }
}
