import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd } from '@angular/router'
import { Observable } from 'rxjs/Observable'

@Component({
    selector: 'app-headbar',
    templateUrl: './headbar.component.html'
})

export class HeadbarComponent implements OnInit {
    path: String

    constructor(
        private route: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit() {
        this.router.events
                    .filter(e => e instanceof NavigationEnd)
                    .map(() => this.route.snapshot)
                    .map(route => {
                        while (route.firstChild) route = route.firstChild
                        return route
                    })
                    .subscribe((route: ActivatedRouteSnapshot) => this.path = route.url[0].path)
    }
}
