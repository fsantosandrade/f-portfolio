import { Component, OnInit } from '@angular/core';
import { ThemaService } from './services/thema.service';
import { DataService } from './services/data.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';


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

  linkedin:string = ''
  github:string = ''

  //main
  titlePt1:string = 'Loading...'
  titlePt2:string = ''
  name:string = 'Loading...'
  location:string = 'Loading...'
  job:string = 'Loading...'
  imageBase:string = 'Loading...'

  //habilidades
  tecnologies: SafeHtml[] = []

  //card projeto 1
  photoProject:string = ''
  nameProject:string = ''
  descProject:string = ''
  caracProject:string[] = []
  tecnologiesProj:string[] = ['js', 'html', 'css']
  linkPage:string = ''
  linkRepos:string = ''

  //card projeto reverse
  photoProjectR:string = ''
  nameProjectR:string = ''
  descProjectR:string = ''
  caracProjectR:string[] = []
  tecnologiesProjR:string[] = ['ag', 'ts', 'html', 'css']
  linkPageR:string = ''
  linkReposR:string = ''

  //card projeto 2
  photoProject2:string = ''
  nameProject2:string = ''
  descProject2:string = ''
  caracProject2:string[] = []
  tecnologiesProj2:string[] = ['js', 'html', 'css']
  linkPage2:string = ''
  linkRepos2:string = ''

  constructor(private themaService:ThemaService, private dataService:DataService, private sanitizer: DomSanitizer){
    this.dataService.getData().subscribe(dado => {
      this.data = dado
      console.log(this.data)

      //header
      this.photoLogo = this.data.photoLogo
      this.linkedin = this.data.linkedin
      this.github = this.data.github

      //main
      this.titlePt1 = this.data.titlePt1
      this.titlePt2 = this.data.titlePt2
      this.name = this.data.name
      this.location = this.data.location
      this.job = this.data.job
      this.imageBase = this.data.apresentation

      //habilidades
      this.data.tecnologies.forEach((tec: any) => {
        this.tecnologies.push(this.sanitizer.bypassSecurityTrustHtml(tec.image))
      })

      //card-project 1
      const projeto1 = this.data.portfolio[0]

      this.photoProject = projeto1.photo
      this.nameProject = projeto1.name
      this.descProject = projeto1.description

      projeto1.caracteristicas.forEach((carac: { caracteristica: string; }) => {
        this.caracProject.push(carac.caracteristica)
      })

      this.linkPage = projeto1.previa
      this.linkRepos = projeto1.repositorio

      //card-project reverse
      const projetoR = this.data.portfolio[1]
      
      this.photoProjectR = projetoR.photo
      this.nameProjectR = projetoR.name
      this.descProjectR = projetoR.description

      projetoR.caracteristicas.forEach((carac: { caracteristica: string; }) => {
        this.caracProjectR.push(carac.caracteristica)
      })

      this.linkPageR = projetoR.previa
      this.linkReposR = projetoR.repositorio

      //card-project 2
      const projeto2 = this.data.portfolio[2]
      
      this.photoProject2 = projeto2.photo
      this.nameProject2 = projeto2.name
      this.descProject2 = projeto2.description

      projeto2.caracteristicas.forEach((carac: { caracteristica: string; }) => {
        this.caracProject2.push(carac.caracteristica)
      })

      this.linkPage2 = projeto2.previa
      this.linkRepos2 = projeto2.repositorio
    })
  }

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
