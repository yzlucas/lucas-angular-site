import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lucas-angular-site';

  getUrl(){
    return "url(../assets/img/background.jpg))";
  }
}
