import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RankingService {

  resourceUrl: string = 'https://covid19-brazil-api.now.sh/api/report/v1';
  constructor(private httpClient: HttpClient) { }

  getRanking(tipo: string) {
    if(tipo == 'estado') {
      return this.httpClient.get(this.resourceUrl);
    } else {
      return this.httpClient.get(this.resourceUrl + '/countries');
    }
  }
}