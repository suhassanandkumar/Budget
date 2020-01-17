import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatTabsModule, MatTableModule } from '@angular/material';

import { TabsComponent } from './tabs-component/tabs.component';
import { TabFirstComponent } from './tab-first/tab-first.component';
import { TabSecondComponent } from './tab-second/tab-second.component';
import { TabThridComponent } from './tab-thrid/tab-thrid.component';

@NgModule({
  declarations: [TabsComponent, TabFirstComponent, TabSecondComponent, TabThridComponent],
  imports: [CommonModule, FormsModule, MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatTabsModule, MatTableModule],


  exports: [TabsComponent, TabFirstComponent, TabSecondComponent, TabThridComponent]
})
export class TabsSectorModule { }
