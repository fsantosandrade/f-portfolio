import { Component, Input, OnInit } from '@angular/core';
import { ThemaService } from 'src/app/services/thema.service';

@Component({
  selector: 'app-formacao',
  templateUrl: './formacao.component.html',
  styleUrls: ['./formacao.component.css']
})
export class FormacaoComponent implements OnInit {
  tema: string = '';
  @Input() formacao:string = ''
  @Input() dataInic:string = ''
  @Input() dataFim:string = ''
  @Input() instituicao:string = ''

  constructor(private themeService: ThemaService) { }

  ngOnInit(): void {
    this.themeService.tema$.subscribe(theme => {
      this.tema = theme
    })
  }

}
