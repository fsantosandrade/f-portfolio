import { Component, Input, OnInit } from '@angular/core';
import { ThemaService } from 'src/app/services/thema.service';
import { SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-habilidades-principais',
  templateUrl: './habilidades-principais.component.html',
  styleUrls: ['./habilidades-principais.component.css']
})
export class HabilidadesPrincipaisComponent implements OnInit {
  tema: string = '';
  @Input() tecnologies: SafeHtml[] = []

  constructor(private themeService: ThemaService) { }

  ngOnInit(): void {
    this.themeService.tema$.subscribe(theme => {
      this.tema = theme
    })
  }

}
