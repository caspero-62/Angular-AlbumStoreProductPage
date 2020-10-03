import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Http, Response} from '@angular/http';

@Injectable()
export class ProductService {

  private _albumUrl;

  getAlbum(id: number) {
    return this._http.get(this._albumUrl).map(response => (
      response.json()
    ));
  }

  constructor(private _http: Http) {
    this._albumUrl = '../assets/album.json';
  }

}
