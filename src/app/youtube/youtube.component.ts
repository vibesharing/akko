import { Component } from '@angular/core';
import { YoutubeService } from './youtube.service';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
    selector: 'as-youtube',
    templateUrl: 'app/youtube/youtube.html',
})

export class YoutubeComponent {
    private _youtubeService: YoutubeService;
    private _http: Http;


    private _movie: string;
    private _youtubeUrl: string;

    constructor(youtubeService: YoutubeService, http: Http) {
        this._youtubeService = youtubeService;
        this._movie = 'Matrix';
        this._youtubeUrl = 'https://www.youtube.com/embed/8cEBYNkGmvI';
        this._http = http;
    }

    /* public searchMovie(): void {
        this._http.get('http://192.168.1.14:8000/todos')
        .map((res: Response) => res.json())
        .subscribe(res => {
            console.log(res);
        })
    }*/
    public searchMovie() {
       let data = 'aieaie';
        let body = JSON.stringify({ data });
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        return this._http.post('http://192.168.1.14:8000/todos', body, options)
        .map((res: Response) => res.json())
        .subscribe((res: Response) => res.json());
    }

     public _searchMovie() {
        let baseURL = 'https://www.googleapis.com/youtube/v3/search?';
        let specs = 'safeSearch=moderate&part=snippet&q=matrix';
        let maxResults = '&maxResults=50&key=';
        let apiKey = 'AIzaSyADz6sKXG5eQHeco8rnGsIxbtZ5U2Rh0VY';
        let URL = baseURL + specs + maxResults + apiKey;

        this._http.get(URL)
            .map((res: Response) => res.json())
            .subscribe(res => {
        console.log(res);
        });
    }
}
