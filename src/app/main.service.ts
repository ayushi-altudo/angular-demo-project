import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  constructor() {}

  getCourses() {
    return ['C', 'C++', 'Java', 'PHP', 'Python'];
  }

  setAddress() {
    return {
      city: 'Agra',
      state: 'UP',
      country: 'India',
    };
  }
}
