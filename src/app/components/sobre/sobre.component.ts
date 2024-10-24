import { Component, Input, OnInit } from '@angular/core';
import { ThemaService } from 'src/app/services/thema.service';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent implements OnInit {
  tema: string = '';
  @Input() photo = ''
  @Input() description = ''
  @Input() idiomas:string[] = []
  @Input() conect = ''
  @Input() curriculo = ''

  constructor(private themeService: ThemaService) { }

  ngOnInit(): void {
    this.themeService.tema$.subscribe(theme => {
      this.tema = theme
    })
  }

  downloadCurriculo(): void {
    const file = this.curriculo
    const link = document.createElement('a');
    link.href = file;
    link.download = 'Currículo_Felipe.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
