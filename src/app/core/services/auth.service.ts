import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { SessionStorageService } from './session-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private sessionStorageService: SessionStorageService) { }

  getCurrentUser(): User | null {
    try {
      const token = this.sessionStorageService.getItem("token");
      if (!token) return null;
      const payload = JSON.parse(atob(token.split(".")[1]));
      return new User(payload.user);
    } catch (err) {
      console.log(err);
      return null;
    }
  }

}
