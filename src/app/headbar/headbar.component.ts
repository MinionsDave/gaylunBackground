import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute, UrlSegment } from '@angular/router'

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
        this.route.url
                .subscribe((urls: UrlSegment[]) => console.log(urls))
    }
}
