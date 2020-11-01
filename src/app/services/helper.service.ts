import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { siteStatus } from '../models/site.model';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

private apiBase = 'http://localhost:3000/api/'

constructor(private httpClient: HttpClient) { }

getHealth(): Observable<siteStatus[]>{
  return this.httpClient.get<siteStatus[]>(this.apiBase + 'healthcheck');
}

}
