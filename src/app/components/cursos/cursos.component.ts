import { Component, Input, OnInit } from '@angular/core';
import { ThemaService } from 'src/app/services/thema.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  tema:string = ''
  active:string = ''
  isOpen:boolean = false
  @Input() name:string = ''
  @Input() nameInstituicao:string = ''
  @Input() dataInicio:string = ''
  @Input() dataFim:string = ''
  @Input() horas:string = ''
  @Input() habilitys:string[] = []

  constructor(private themeService: ThemaService) { }

  ngOnInit(): void {
    this.themeService.tema$.subscribe(theme => {
      this.tema = theme
    })
  }

  open(elemento: any) {
    if (this.isOpen == false){
      this.isOpen = true
    }else {
      this.isOpen = false
    }

    if(elemento.classList.contains('open')){
      elemento.classList.remove('open')
      this.active = ''
    }else {
      elemento.classList.add('open')
      this.active = 'active'
    }
  }
}
