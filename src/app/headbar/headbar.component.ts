import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute, UrlSegment, NavigationEnd } from '@angular/router'
import { Observable } from 'rxjs/Observable'

@Component({
    selector: 'app-headbar',
    templateUrl: './headbar.component.html'
})

export class HeadbarComponent implements OnInit {
    path: String
    url: Observable<String>

    constructor(
        private route: ActivatedRoute,
        private router: Router
    ) {
        this.url = route.url.map(segments => segments.join())
    }

    ngOnInit() {
        // this.router.events
        //             .filter(event => event instanceof NavigationEnd)
        //             .subscribe(event => {
        //                 let currentRoute = this.route.root
        //                 while (currentRoute.children[0] !== undefined) {
        //                     currentRoute = currentRoute.children[0]
        //                 }
        //                 console.log(currentRoute.snapshot.data)
        //             })
        // this.route.url.map(segments => segments.join())
        //             .subscribe(console.log)
    }
}
