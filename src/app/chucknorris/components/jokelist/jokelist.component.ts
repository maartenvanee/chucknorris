import { Joke } from './../../interfaces/joke.interface';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'jokelist',
    templateUrl: './jokelist.component.html',
    styleUrls: ['./jokelist.component.css']
})
export class JokeListComponent {

    @Input()
    public jokes: Joke[];

    @Input()
    public title: string;

    @Output()
    public onToggleFavorite: EventEmitter<any> = new EventEmitter();

    constructor() { }

    public toggleFavorite(joke: Joke) {
        this.onToggleFavorite.emit(joke);
    }
}
