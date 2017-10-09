import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {AlbumsComponent} from "./albums/albums.component";
import {NewAlbumComponent} from "./new-album/new-album.component";
import {NewTrackComponent} from "./new-track/new-track.component";
import {TracksComponent} from "./tracks/tracks.component";

const APP_ROUTES: Routes = [
  { path: '', component: AlbumsComponent },
  { path: 'new-album', component: NewAlbumComponent },
  { path: 'new-track', component: NewTrackComponent },
  { path: 'tracks', component: TracksComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
