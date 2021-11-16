import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SessionStorageService } from 'src/app/core/services/session-storage.service';
import { SweetalertService } from 'src/app/core/services/sweetalert.service';
import { AuthApiService } from '../../services/auth-api.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  loginForm = this.fb.group({
    email: [''],
    password: [''],
  });

  constructor(private fb: FormBuilder, private authApiService: AuthApiService, private sweetalertService: SweetalertService, private sessionStorageService: SessionStorageService) { }

  ngOnInit(): void {
  }

  onLoginSubmit() {
    this.authApiService.login(this.loginForm.value).subscribe({
      next: res => {
        this.sessionStorageService.setItem("token", res.access_token);
      },
      error: errorResponse => {
        this.sweetalertService.showApiErrors(errorResponse);
      }
    });
  }

}
