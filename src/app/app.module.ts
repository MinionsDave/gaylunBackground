import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'

import { PaginationModule } from 'ng2-bootstrap'

import { AppRoutingModule } from './app-routeing.module'

import { AppComponent } from './app.component'
import { LoginComponent } from './login/login.component'
import { VisitsComponent } from './visits/visits.component'
import { HeadbarComponent } from './headbar/headbar.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    VisitsComponent,
    HeadbarComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    PaginationModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
