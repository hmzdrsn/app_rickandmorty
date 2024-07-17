import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { forkJoin, Observable } from "rxjs";


@Injectable(
    {providedIn:'root'}
)
export class EpisodeService {
    private baseUrl: string = 'https://rickandmortyapi.com/api/episode';
    private _httpClient: HttpClient;
    constructor(private httpClient: HttpClient) {
        this._httpClient = httpClient;
    }
    getEpisodeById(id: number): Observable<any> {
        const url = `${this.baseUrl}/${id}`;
        return this._httpClient.get<any>(url);
    }

    getAllEpisodes(): Observable<any> {
        return this._httpClient.get(`${this.baseUrl}`);
      }
    getMultipleEpisodes(ids: number[]): Observable<any[]> {
        const requests = ids.map(id => this.getEpisodeById(id));
        return forkJoin(requests); 
    }


}