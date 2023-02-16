import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { MainService } from '../main.service';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnChanges, OnInit {
  toggle: boolean = true;
  @Input() counter: any;
  constructor(_service: MainService, _loginservice: LoginService) {
    //let course = new MainService();
    console.log('Course', _service.getCourses());
    console.log(_loginservice.setLoginDetails().city);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Inside ngOnChanges', this.counter);
  }

  ngOnInit(): void {
    console.log('Inside ngOnInit');
  }

  callToggle() {
    this.toggle = this.toggle ? false : true;
  }
}
