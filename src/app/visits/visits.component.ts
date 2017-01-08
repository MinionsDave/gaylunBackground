import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs/Observable'

import { VisitService } from '../visit.service'
import { Visit } from '../visit'

@Component({
    selector: 'app-visits',
    templateUrl: './visits.component.html',
    providers: [
        VisitService
    ]
})

export class VisitsComponent implements OnInit {
    pagination = {
        pageNo: 1,
        pageSize: 30,
        totalItems: Number
    }

    visits: Visit[]

    constructor(private visitService: VisitService) {}
    list(event: any) {
        this.visitService.index(event.page, event.itemsPerPage)
                            .subscribe(res => {
                                this.visits = res.visits
                                this.pagination.totalItems = res.totalCount
                            })
    }

    ngOnInit() {
        this.list({
            page: 1,
            itemsPerPage: 30
        })
    }
}
