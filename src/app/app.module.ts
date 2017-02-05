import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'

import { PaginationModule } from 'ng2-bootstrap'

import { Ng2Echarts } from 'ng2-echarts'

import { AppRoutingModule } from './app-routeing'

import { AppComponent } from './app.component'
import { LoginComponent } from './login/login.component'
import { VisitsComponent } from './visits/visits.component'
import { HeadbarComponent } from './headbar/headbar.component'

import { UserService } from './user.service'
import { AuthGuard } from './auth-guard.service'
import { DiagramComponent } from './diagram/diagram.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    VisitsComponent,
    HeadbarComponent,
    DiagramComponent,
    Ng2Echarts
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    PaginationModule.forRoot()
  ],
  providers: [
    UserService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
