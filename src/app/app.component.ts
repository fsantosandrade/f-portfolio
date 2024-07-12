import { Component, OnInit } from '@angular/core';
import { ThemaService } from './services/thema.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './app.component.media.css']
})
export class AppComponent implements OnInit {
  photoTheme:string = ''
  tema: string = ''

  constructor(private themaService:ThemaService){}

  ngOnInit(): void {
    this.themaService.tema$.subscribe(theme => {
      this.tema = theme
    })
    this.photoTheme = 'assets/icons/moon.png'
  }

  changeTheme() {
    this.themaService.setTheme()
    this.updatePhotoTheme()
  }

  updatePhotoTheme() {
    if(this.tema == 'light'){
      this.photoTheme = 'assets/icons/sun.png'
    }else if(this.tema == '.') {
      this.photoTheme = 'assets/icons/moon.png'
    }
  }

  title = 'f-portfolio';
}
