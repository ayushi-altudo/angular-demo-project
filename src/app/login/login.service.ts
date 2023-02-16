import { Injectable } from '@angular/core';
import { MainService } from '../main.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private _service: MainService) {}

  setLoginDetails() {
    return {
      name: 'Ayushi',
      age: '25',
      phone: 7938938637,
      city: this._service.setAddress().city,
    };
  }
}
