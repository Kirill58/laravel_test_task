import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Album} from "../album.interface";
import {AlbumService} from "../album.service";

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  @Input() album: Album;
  @Output() albumDeleted = new EventEmitter<Album>();
  editing=false;
  editTitle= '';
  editYear= 0;

  constructor(private albumService: AlbumService ) { }

  ngOnInit() {
  }

  onEdit(){
    this.editing = true;
    this.editTitle = this.album.title;
    this.editYear = this.album.year;
  }

  onUpdate() {
    this.albumService.updateAlbum(this.album.id_album, this.editTitle, this.editYear)
      .subscribe(
        (albums:Album) => {
          this.album.title = this.editTitle;
          this.album.year = this.editYear;
          this.editTitle = '';
          this.editYear = 0;
        }
      );
    this.editing = false;
  }

  onDelete() {
    this.albumService.deleteAlbum(this.album.id_album)
      .subscribe(
        ()=> {
          this.albumDeleted.emit(this.album);
          console.log('Album deleted')
        }
      )
  }

  onCancel() {
    this.editTitle = ''
    this.editYear = 0;
  }
}
