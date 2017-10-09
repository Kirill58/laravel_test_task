import {Component, OnInit, Input} from '@angular/core';
import {Track} from "../track.interface";
import {TrackService} from "../track.service";

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.css']
})
export class TracksComponent implements OnInit {
  @Input() track: Track;
  tracks: Track[];
  editing=false;
  editAlbumId = 0;
  editArtist = '';
  editTitle = '';
  editTime = '';

  constructor(private trackService: TrackService) { }

  ngOnInit() {
  }

  onGetTracks(){
    this.trackService.getTracks()
      .subscribe(
        (tracks: Track[]) => this.tracks = tracks,
        (error:Response) => console.log(error)
      );
  }

  onEdit(){
    this.editing = true;
    this.editAlbumId = this.track.id_album;
    this.editArtist = this.track.artist;
    this.editTitle = this.track.title;
    this.editTime = this.track.time;
  }

  onUpdate() {
    this.trackService.updateAlbum(this.track.id_track, this.editAlbumId, this.editArtist, this.editTitle, this.editTime )
      .subscribe(
        (tracks:Track) => {
          this.track.id_album = this.editAlbumId;
          this.track.artist = this.editArtist;
          this.track.title = this.editTitle;
          this.track.time = this.editTime;
          this.editAlbumId = 0;
          this.editArtist = '';
          this.editTitle = '';
          this.editTime = '';
        }
      );
    this.editing = false;
  }

  onDelete() {
    this.trackService.deleteAlbum(this.track.id_track)
      .subscribe(
        ()=> {
          console.log('track deleted')
        }
      )
  }

  onCancel() {
    this.editAlbumId = 0;
    this.editArtist = '';
    this.editTitle = '';
    this.editTime = '';
  }
}
