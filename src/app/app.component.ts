import { Component } from '@angular/core';
import { UserDetailsService } from './common/user-details.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'iBudget';
  updateColor = true;
  setSpinner: boolean = false;

  constructor(userService: UserDetailsService){ 
    this.setSpinner = userService.setSpinner;
  }
  
  ngOnInit(): void {
  }

  actSpinner(val: boolean){
    this.setSpinner = val;
  }

}
