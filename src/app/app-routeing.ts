import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { LoginComponent } from './login/login.component'
import { VisitsComponent } from './visits/visits.component'
import { DiagramComponent } from './diagram/diagram.component'

import { AuthGuard } from './auth-guard.service'

const appRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    }, {
        path: 'visits',
        component: VisitsComponent,
        canActivate: [AuthGuard]
    }, {
        path: 'diagram',
        component: DiagramComponent
    }, {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {
            useHash: true
        })
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {}
