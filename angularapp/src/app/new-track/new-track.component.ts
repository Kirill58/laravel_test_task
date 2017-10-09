import { Component, OnInit } from '@angular/core';
import {TrackService} from "../track.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-new-track',
  templateUrl: './new-track.component.html',
  styleUrls: ['./new-track.component.css']
})
export class NewTrackComponent implements OnInit {

  constructor(private trackService: TrackService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    this.trackService.addTrack(form.value.albumId, form.value.artist, form.value.title, form.value.time)
      .subscribe(
        ()=>alert('Track added')
      );
    form.reset();
  }
}
