import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { YoutubeComponent } from './index';
import { YoutubeService } from './youtube.service';
import { HttpModule } from '@angular/http';


@NgModule({
    declarations: [
        YoutubeComponent
    ],
    imports: [
        FormsModule,
        BrowserModule,
        HttpModule
    ],
    exports: [
        YoutubeComponent
    ],
    providers: [
        YoutubeService,
    ],
})
export class YoutubeModule {
}
