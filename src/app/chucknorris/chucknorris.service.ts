import { ChuckNorrisModule } from './chucknorris.module';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ChuckNorrisService {

    constructor(private http: HttpClient) { }

    getRandomJokes(count: number) {
        return this.http.get(`http://api.icndb.com/jokes/random/${count}`);
    }
}
