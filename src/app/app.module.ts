import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { MatDialogModule ,MatFormFieldModule, MatIconModule, MatInputModule, MatMenuModule, MatProgressSpinnerModule, MatToolbarModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChangedomDirective } from './common/directive/changedom.directive';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { LoginComponent } from './common/login/login.component';
import { HomeComponent } from './common/home/home.component';
import { RegisterComponent } from './common/register/register.component';
import { DialogModal } from './common/modal/modal.component';
import { TabsSectorModule } from './common/home/tabs-sector/tabs-sector.module'

@NgModule({
  declarations: [
    AppComponent,
    ChangedomDirective,
    DialogModal,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    NgbModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    TabsSectorModule
  ],
  entryComponents:[DialogModal],
  exports: [MatFormFieldModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
