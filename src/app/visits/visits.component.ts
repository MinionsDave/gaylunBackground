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
    ngOnInit() {
        this.visitService.index(this.pagination.pageNo, this.pagination.pageSize)
                            .subscribe(res => {
                                this.visits = res.visits
                            })
    }
}
