import { Component, OnInit } from '@angular/core';
import { UserDetailsService } from 'src/app/common/user-details.service';
import { TransactServiceService } from '../transact-service.service';
import { transactDetails } from 'src/app/common/models/userDetails';

@Component({
  selector: 'app-tab-first',
  templateUrl: './tab-first.component.html',
  styleUrls: ['./tab-first.component.scss']
})
export class TabFirstComponent implements OnInit {

  private transDetails: transactDetails = { userId: "", id: "", description: "", amount: null };
  public transData: transactDetails[];
  constructor(private transactservice: TransactServiceService, private userService: UserDetailsService) { }

  ngOnInit() {
    this.transDetails.userId = this.userService.loggedUser.id;
    console.log("transDetails ID : ", this.transDetails.id);
  }
  
  saveTrans() {
    if (this.transDetails.amount && this.transactservice.transDataKey.length) {
      this.transDetails.id = this.userService.uuid();
      this.transactservice.transDataKey.filter(key => {
        if (key === this.transDetails.userId) {
          this.transactservice.addTransaction(this.transDetails).subscribe(res =>{
            if (res['status'] === 200) {
              console.log("updated response : ", res['error'].text);
            }
          });
          console.log("transData : ", this.transDetails);
        };
      })
    }
  }

}
