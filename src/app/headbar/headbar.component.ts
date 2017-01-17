import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute, UrlSegment, NavigationEnd } from '@angular/router'
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
                    .subscribe((e: NavigationEnd) => this.path = e.urlAfterRedirects)
    }
}
