import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { LoginComponent } from './login/login.component'
import { VisitsComponent } from './visits/visits.component'

const appRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    }, {
        path: 'visits',
        component: VisitsComponent
    }, {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {}
