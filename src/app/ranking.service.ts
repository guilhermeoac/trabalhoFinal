import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { identity } from 'rxjs';

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

    getEstado(id: string) {
      if(id.length == 2 && id != 'US') {
        return this.httpClient.get(this.resourceUrl + '/brazil/uf/' + id);
      } else {
        return this.httpClient.get(this.resourceUrl + '/' + id);
    }
  }

  getEstadoByData(id: string) {
    return this.httpClient.get(this.resourceUrl + '/brazil/' + id);
}
}