import { Component } from '@angular/core';


// the templateUrl will call the file or the html code inside to execute as body;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
