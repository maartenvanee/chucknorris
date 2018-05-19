import { ChuckNorrisService } from './../chucknorris.service';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpResponse } from '@angular/common/http';

@Component({
    selector: 'chucknorrispage',
    templateUrl: './chucknorrispage.component.html'
})
export class ChuckNorrisPageComponent implements OnInit {

    private jokes;
    constructor(private chuckNorrisService: ChuckNorrisService) { }

    ngOnInit() {
        this.chuckNorrisService.getRandomJokes().subscribe((response: any) => {
            this.jokes = response.value;
            console.log(this.jokes);
        }, error => {
            console.log('error: ', error);
        });
    }
}
