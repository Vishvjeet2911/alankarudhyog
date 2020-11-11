import { Component } from '@angular/core';
import { HeaderComponent } from './dashboard/header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'au';

  LC:any;

  ngOnInit(){
    this.LC = HeaderComponent;
  }
}
