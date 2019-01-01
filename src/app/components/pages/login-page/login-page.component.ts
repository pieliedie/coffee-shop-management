import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  constructor(
    private authService: AuthenticationService,
    private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.authService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe( result => {
      console.log(result);
      if(result && result.access_token) {
        localStorage.setItem('currentUser', JSON.stringify(result));
        this.router.navigate(['/home']);
      }
    });
  }

}
