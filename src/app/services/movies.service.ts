import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actor, MovieDetails, ResultMDB } from '../models/movie';
import { environment } from './../../environments/environment';

const URL = environment.url;
const apiKey = environment.apiKey;

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private page = 0;

  constructor(private http: HttpClient) {}

  private queries<T>(query: string) {
    query = URL + query;
    query += `&api_key=${apiKey}`;

    return this.http.get<T>(query);
  }

  getFeatures() {
    this.page++;

    const query = `/discover/movie?sort_by=popularity.desc&page=${this.page}`;

    return this.queries<ResultMDB>(query);
  }

  getMovies() {
    const today = new Date();
    const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
    const month = today.getMonth() + 1;

    let mesString;

    month < 10 ? (mesString = '0' + month) : (mesString = month);

    const initial = `${today.getFullYear()}-${mesString}-01`;
    const final = `${today.getFullYear()}-${mesString}-${lastDay}`;

    return this.queries<ResultMDB>(
      `/discover/movie?primary_release_date.gte=${initial}&primary_release_date.lte=${final}`
    );
  }

  getDetails(id: string) {
    return this.queries<MovieDetails>(`/movie/${id}?a=1`);
  }

  getActors(id: string) {
    return this.queries<Actor>(`/movie/${id}/credits?a=1`);
  }

  buscarFilmes(texto: string) {
    return this.queries(`/search/movie?query=${texto}`);
  }
}
