import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angularTraining';
  count: number = 0;

  incrFun() {
    this.count++;
  }

  decrFun() {
    this.count--;
  }
}
