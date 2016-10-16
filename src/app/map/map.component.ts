import { Component, OnInit } from '@angular/core';

// import { Http, Response, Headers, RequestOptions } from '@angular/http';

// import { MapService } from './map.service';


@Component({
    selector: 'as-map',
    templateUrl: 'app/map/map.html',
})

export class MapComponent implements OnInit {
   private mapTitle: string;
   private lat: number;
   private lng: number;

    // constructor() {}

    public ngOnInit(): void {
        this.mapTitle = 'map';
        this.lat = 51;
        this.lng = 8;
    }
}
