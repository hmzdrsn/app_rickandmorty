import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { forkJoin, Observable } from "rxjs";


@Injectable(
    {providedIn:'root'}
)
export class CharacterService {
    private baseUrl: string = 'https://rickandmortyapi.com/api/character';
    private _httpClient: HttpClient;
    constructor(private httpClient: HttpClient) {
        this._httpClient = httpClient;
    }
    getCharacterById(id: number): Observable<any> {
        const url = `${this.baseUrl}/${id}`;
        return this._httpClient.get<any>(url);
    }

    getMultipleCharacters(ids: number[]): Observable<any[]> {
        const requests = ids.map(id => this.getCharacterById(id));
        return forkJoin(requests); 
    }

}