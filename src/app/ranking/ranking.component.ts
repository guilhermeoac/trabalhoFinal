import { Component, OnInit, Input } from '@angular/core';
import { RankingService } from '../ranking.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {

  @Input() tipoRanking: string;


  value: any[] = [];

  constructor(private rankingService: RankingService) { }

  ngOnInit(): void {
    this.getDados();

  }

  getDados() {
    this.rankingService.getRanking(this.tipoRanking).subscribe((response: any) => {
      this.value = response.data;
      this.value.sort((a,b) => a.cases < b.cases ? 1 : -1);
    })
  }

}
