import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { AlbumComponent } from './album/album.component';
import { AlbumsComponent } from './albums/albums.component';
import { NewAlbumComponent } from './new-album/new-album.component';
import {routing} from "./app.routing";
import {AlbumService} from "./album.service";
import { TracksComponent } from './tracks/tracks.component';
import { NewTrackComponent } from './new-track/new-track.component';
import {TrackService} from "./track.service";


@NgModule({
  declarations: [
    AppComponent,
    AlbumComponent,
    AlbumsComponent,
    NewAlbumComponent,
    TracksComponent,
    NewTrackComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [AlbumService, TrackService],
  bootstrap: [AppComponent]
})
export class AppModule { }
