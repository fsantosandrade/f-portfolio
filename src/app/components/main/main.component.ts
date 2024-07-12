import { Component, Input, OnInit } from '@angular/core';
import { ThemaService } from 'src/app/services/thema.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  tema:string = ''
  @Input() titlePt1:string = ''
  @Input() titlePt2:string = ''
  @Input() name:string = ''
  @Input() location:string = ''
  @Input() job:string = ''
  @Input() imageBase:string = ''

  constructor(private themeService: ThemaService) { }

  ngOnInit(): void {
    this.themeService.tema$.subscribe(theme => {
      this.tema = theme
    })
  }

}
