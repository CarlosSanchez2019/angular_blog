import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UserI } from '../../shared/models/use.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  ngOnInit() {
  }

  onLogin(form:UserI){
    this.authService.loginByEmail(form)
    .then(res => {
      console.log('Hecho', res)
      this.router.navigate(['/admin'])
    })
    .catch(err => console.log('Error', err))
  }

}
