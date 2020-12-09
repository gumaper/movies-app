import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  getMovies() {
    const today = new Date();
    const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
    const month = today.getMonth() + 1;

    let mesString;

    month < 10 ? (mesString = '0' + month) : (mesString = month);

    const initial = `${today.getFullYear()}-${mesString}-01`;
    const final = `${today.getFullYear()}-${mesString}-${lastDay}`;

    return this.http.get<ResultMDB>(
      `${environment.url}/discover/movie?primary_release_date.gte=${initial}&primary_release_date.lte=${final}&api_key=${environment.apiKey}`
    );
  }
}
