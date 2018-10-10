import { ChuckNorrisModule } from './chucknorris.module';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JokeResponse } from './interfaces/jokeresponse.interface';


@Injectable()
export class ChuckNorrisService {

    constructor(private http: HttpClient) { }

    getRandomJokes(count: number) {
        return this.http.get<JokeResponse>(`http://api.icndb.com/jokes/random/${count}`);
    }
}
