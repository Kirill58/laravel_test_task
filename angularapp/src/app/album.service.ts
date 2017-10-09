import {Injectable} from "@angular/core";
import {Http, Response, Headers} from "@angular/http";
import 'rxjs/Rx';
import {Observable} from "rxjs";

@Injectable()
export class AlbumService {
  constructor (private http: Http) {

  }

  addAlbum(newTitle: string, newYear: number) {
    const body = JSON.stringify({title: newTitle, year: newYear});
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post('http://laraveltask/api/album', body, {headers: headers})
      .map(
        (response: Response) => response.json()
      );
  }

  getAlbums(): Observable<any> {
    return this.http.get('http://laraveltask/api/albums')
      .map(
      (response: Response) => {
        return response.json().albums;
      }
    );
  }

  updateAlbum(id_album: number, newTitle: string, newYear: number){
    const body = JSON.stringify({title: newTitle, year: newYear});
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.put('http://laraveltask/api/album/' + id_album, body, {headers: headers})
      .map(
        (response: Response) => response.json()
      );
  }

  deleteAlbum(id_album: number) {
    return this.http.delete('http://laraveltask/api/album/' + id_album)
      .map(
        (response: Response) => response.json()
      );
  }
}
