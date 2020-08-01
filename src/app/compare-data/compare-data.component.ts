import { Component, OnInit } from '@angular/core';
import { RankingService } from '../ranking.service';

@Component({
  selector: 'app-compare-data',
  templateUrl: './compare-data.component.html',
  styleUrls: ['./compare-data.component.css']
})
export class CompareDataComponent implements OnInit {

  br: any = {
    firstDayOfWeek: 0,
    dayNames: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
    dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
    dayNamesMin: ["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"],
    monthNames: [ "Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro" ],
    monthNamesShort: [ "Jan", "Fev", "Mar", "Abr", "Mai", "Jun","Jul", "Ago", "Set", "Out", "Nov", "Dez" ],
    today: 'Hoje',
    clear: 'Limpar',
    dateFormat: 'dd/mm/yyyy',
    weekHeader: 'Wk'
};
  data1:any[]=[];
  data2:any[]=[];
  filtro1: Date;
  filtro2: Date;
  estado: string = 'MG';
  constructor(private rankingService: RankingService) { }

  ngOnInit(): void {
  }

  search() {
    this.getEstado1();
    this.getEstado2();
  }

  convertDate(data: Date) {
    let dia : string = data.getDate().toString();
    let mes =  data.getMonth() + 1;
    let mesString: string = mes.toString();
    if(mesString.length != 2) {
      mesString = '0' + mesString;
    }
    if(dia.length != 2) {
      dia = '0' + dia;
    }
    return data.getFullYear().toString() + mesString + dia;
  }

  getEstado1() {
    this.rankingService.getEstadoByData(this.convertDate(this.filtro1)).subscribe((response: any) => {
      this.data1 = response.data.filter(value => value.uf == this.estado);
    });
  }

  getEstado2() {
    this.rankingService.getEstadoByData(this.convertDate(this.filtro2)).subscribe((response: any) => {
      this.data2 = response.data.filter(value => value.uf == this.estado);
    });
  }
}
