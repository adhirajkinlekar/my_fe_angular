import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Response } from '../../../modules/service/http/httpResponse';
import { Router } from '@angular/router';
import { AppService } from '../../../app.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {
  signInForm: FormGroup;

  constructor(private fb: FormBuilder, private http:HttpClient, private router: Router, private appService: AppService) {
    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.signInForm.valid) {
      // Form is valid, proceed with login logic
      // console.log(this.signInForm.value);
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    

    this.http.post<Response<TokenResponse>>('https://localhost:7121/api/auth/login', { email: this.signInForm.value.email, password: this.signInForm.value.password }, httpOptions).subscribe(
      {
        next: (res) => {

          console.log(res.data.token)

          localStorage.setItem('JWT_TOKEN', res.data.token);

          this.appService.isLoggedIn$.next(true);

          this.router.navigate(['/protected']);
        },
        error: (err) => {
          console.log(err)
        }
      }
    )
  }
}

interface TokenResponse {
  token: string
}

