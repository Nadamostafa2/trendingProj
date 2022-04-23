import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


  constructor(private _AuthService: AuthService, private _Router: Router) { }

  ngOnInit(): void {
  }
  registerForm: FormGroup = new FormGroup({
    'first_name': new FormControl("nada", Validators.required),
    'last_name': new FormControl("mostafa", [Validators.minLength(3), Validators.maxLength(30)]),
    'age': new FormControl("18", [Validators.min(18), Validators.max(50)]),
    'email': new FormControl("", [Validators.required, Validators.email]),
    'password': new FormControl("", [Validators.required, Validators.minLength(3)])

  })
  register() {
    if (this.registerForm.invalid)
      return;
    this._AuthService.signUp(this.registerForm.value).subscribe((data) => {
      console.log(data)
      if (data.message == 'success')
        this._Router.navigateByUrl("/login");
      else
        alert("email has already Exist")

    })
  }

}
