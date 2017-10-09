import { Component, OnInit } from '@angular/core';
import {Response} from "@angular/http";

import {Album} from "../album.interface";
import {AlbumService} from "../album.service";


@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums: Album[];

  constructor(private albumService: AlbumService) { }

  ngOnInit() {
  }

  onGetAlbums(){
    this.albumService.getAlbums()
      .subscribe(
        (albums: Album[]) => this.albums = albums,
        (error:Response) => console.log(error)
      );
  }

  onDeleted(albums: Album){
    const position = this.albums.findIndex(
      (albumEl: Album) => {
        return  albumEl.id_album == albums.id_album;
      }
    )
    this.albums.splice(position, 1);
  }

}
