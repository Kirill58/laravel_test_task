import {Injectable} from "@angular/core";
import {Http, Response, Headers} from "@angular/http";
import 'rxjs/Rx';
import {Observable} from "rxjs";

@Injectable()
export class TrackService {
  constructor (private http: Http) {

  }

  addTrack(newAlbumId:number, newArtist:string, newTitle: string, newTime: string) {
    const body = JSON.stringify({id_album: newAlbumId, artist: newArtist, title: newTitle, time: newTime});
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post('http://laraveltask/api/track', body, {headers: headers})
      .map(
        (response: Response) => response.json()
      );
  }

  getTracks(): Observable<any> {
    return this.http.get('http://laraveltask/api/tracks')
      .map(
        (response: Response) => {
          return response.json().tracks;
        }
      );
  }

  updateAlbum(id_track: number, newAlbumId:number, newArtist:string, newTitle: string, newTime: string){
    const body = JSON.stringify({id_album: newAlbumId, artist: newArtist, title: newTitle, time: newTime});
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.put('http://laraveltask/api/track/' + id_track, body, {headers: headers})
      .map(
        (response: Response) => response.json()
      );
  }

  deleteAlbum(id_track: number) {
    return this.http.delete('http://laraveltask/api/track/' + id_track)
      .map(
        (response: Response) => response.json()
      );
  }
}
