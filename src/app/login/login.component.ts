import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _AuthService: AuthService, private _Router: Router) { }

  ngOnInit(): void {
  }
  loginForm: FormGroup = new FormGroup({
    'email': new FormControl("", [Validators.required, Validators.email]),
    'password': new FormControl("", [Validators.required, Validators.minLength(3)])


  })
  login() {
    if (this.loginForm.invalid)
      return;
    this._AuthService.signIn(this.loginForm.value).subscribe((data) => {
      console.log(data)
      if (data.message == 'success'){
        localStorage.setItem("token",data.token);
        this._Router.navigateByUrl("home");
      }
      else {
        this.loginForm.reset();
      }
    })
    }

  
}
