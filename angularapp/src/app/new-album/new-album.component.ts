import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AlbumService} from "../album.service";

@Component({
  selector: 'app-new-album',
  templateUrl: './new-album.component.html',
  styleUrls: ['./new-album.component.css']
})
export class NewAlbumComponent implements OnInit {

  constructor(private albumService: AlbumService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    this.albumService.addAlbum(form.value.title, Number(form.value.year))
      .subscribe(
        ()=>alert('Album created')
      );
    form.reset();
  }
}
