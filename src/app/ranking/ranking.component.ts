import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { RankingService } from '../ranking.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit, OnChanges {

  @Input() tipoRanking: string;


  value: any[] = [];
  linhaSelecionada: any;

  constructor(private rankingService: RankingService,
    private router: Router) { }

  ngOnInit(): void {
    this.getDados();

  }

  ngOnChanges(): void {
    this.getDados();
  }

  getDados() {
    this.rankingService.getRanking(this.tipoRanking).subscribe((response: any) => {
      this.value = response.data;
      this.value.sort((a,b) => a.cases < b.cases ? 1 : -1);
    });
  }

  selecionalinha() {
    if(this.tipoRanking == 'pais') {
      this.router.navigate(['detalhar',this.linhaSelecionada.country]);
      return;
    }
    this.router.navigate(['detalhar',this.linhaSelecionada.uf]);
  }

}
