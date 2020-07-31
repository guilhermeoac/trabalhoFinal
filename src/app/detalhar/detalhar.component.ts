import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RankingService } from '../ranking.service';

@Component({
  selector: 'app-detalhar',
  templateUrl: './detalhar.component.html',
  styleUrls: ['./detalhar.component.css']
})
export class DetalharComponent implements OnInit {

  id: string;
  value: any;
  tipo: boolean;

  constructor(private rankingService: RankingService,
    private router: Router,
    private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe((response: any) => {
      this.id = response['id'];
    });

    this.getDados();
    this.tipo = this.id.length == 2 && this.id != 'US';
  }

  getDados() {
    this.rankingService.getEstado(this.id).subscribe((response: any) => {
      this.value = response;
    });
  }

}
