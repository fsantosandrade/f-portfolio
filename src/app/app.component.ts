import { Component, OnInit } from '@angular/core';
import { ThemaService } from './services/thema.service';
import { DataService } from './services/data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './app.component.media.css']
})
export class AppComponent implements OnInit {
  photoTheme:string = ''
  photoLogo:string = ''
  tema: string = ''
  data: any

  //main
  titlePt1:string = 'Loading...'
  titlePt2:string = ''
  name:string = 'Loading...'
  location:string = 'Loading...'
  job:string = 'Loading...'
  imageBase:string = 'Loading...'

  constructor(private themaService:ThemaService, private dataService:DataService){}

  ngOnInit(): void {
    this.themaService.tema$.subscribe(theme => {
      this.tema = theme
    })

    this.dataService.getData().subscribe(dado => {
      this.data = dado
      console.log(this.data)

      //header
      this.photoLogo = this.data.photoLogo

      //main
      this.titlePt1 = this.data.titlePt1
      this.titlePt2 = this.data.titlePt2
      this.name = this.data.name
      this.location = this.data.location
      this.job = this.data.job
      this.imageBase = this.data.apresentation
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
