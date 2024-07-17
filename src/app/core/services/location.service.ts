import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { forkJoin, Observable } from "rxjs";


@Injectable(
    {providedIn:'root'}
)
export class LocationService {
    private baseUrl: string = 'https://rickandmortyapi.com/api/location';
    private _httpClient: HttpClient;
    constructor(private httpClient: HttpClient) {
        this._httpClient = httpClient;
    }
    getLocationById(id: number): Observable<any> {
        const url = `${this.baseUrl}/${id}`;
        return this._httpClient.get<any>(url);
    }

    getMultipleLocations(ids: number[]): Observable<any[]> {
        const requests = ids.map(id => this.getLocationById(id));
        return forkJoin(requests); 
    }

}