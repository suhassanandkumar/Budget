import { Component, OnInit } from '@angular/core';

import { TransactService } from '../transact-service.service';

@Component({
  selector: 'app-tab-second',
  templateUrl: './tab-second.component.html',
  styleUrls: ['./tab-second.component.scss']
})
export class TabSecondComponent {
  displayedColumns: string[] = ['position', 'description', 'amount', 'delete'];

  constructor(private transactservice: TransactService) { }

  ngOnInit() { }

  applyFilter(filterValue: string) {
    this.transactservice.tableBind.filter = filterValue.trim().toLowerCase();
  }

}
