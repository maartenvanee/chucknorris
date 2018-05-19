import { ChuckNorrisService } from './chucknorris.service';
import { ChuckNorrisPageComponent } from './pages/chucknorrispage.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JokesComponent } from './components/jokes/jokes.component';
import { FavoritejokesComponent } from './components/favoritejokes/favoritejokes.component';
import { JokeComponent } from './components/joke/joke.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [
        CommonModule, HttpClientModule
    ],
    declarations: [
        ChuckNorrisPageComponent, JokesComponent, FavoritejokesComponent, JokeComponent
    ],
    exports: [
        ChuckNorrisPageComponent
    ],
    providers: [ChuckNorrisService],
})
export class ChuckNorrisModule { }
