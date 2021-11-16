import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginApiRequest } from '../interfaces/login-api-request';
import { LoginApiResponse } from '../interfaces/login-api-response';
import { PaddleLevelApiResponse } from '../interfaces/paddle-level-api-response';
import { RegisterApiRequest } from '../interfaces/register-api-request';
import { RegisterApiResponse } from '../interfaces/register-api-response';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {

  constructor(private http: HttpClient) { }

  getPaddleLevels(): Observable<PaddleLevelApiResponse[]> {
    return this.http.get<PaddleLevelApiResponse[]>("http://padelpol.herokuapp.com/api/paddle-levels");
  }

  login(params: LoginApiRequest): Observable<LoginApiResponse> {
    return this.http.post<LoginApiResponse>("http://padelpol.herokuapp.com/api/auth/login", params);
  }

  register(params: RegisterApiRequest): Observable<RegisterApiResponse> {
    return this.http.post<RegisterApiResponse>("http://padelpol.herokuapp.com/api/auth/register", params);
  }
}
