import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authservice: AuthService) { }

  ngOnInit() {
  }

  public onSignIn(form: NgForm): void {
    const email = form.value.email;
    const password = form.value.password;
    this.authservice.signinUser(email, password);
    // const token = this.authservice.getToken()
    // console.log(token)
  }

}
