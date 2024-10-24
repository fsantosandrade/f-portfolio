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
  nameProject:string = 'Loading...'
  descProject:string = 'Loading...'
  caracProject:string[] = []
  tecnologiesProj:string[] = ['Ag', 'Ts', 'html', 'css']
  linkPage:string = ''
  linkRepos:string = ''

  //card projeto reverse
  photoProjectR:string = ''
  nameProjectR:string = 'Loading...'
  descProjectR:string = 'Loading...'
  caracProjectR:string[] = []
  tecnologiesProjR:string[] = ['ag', 'ts', 'html', 'css']
  linkPageR:string = ''
  linkReposR:string = ''

  //card projeto 2
  photoProject2:string = ''
  nameProject2:string = 'Loading...'
  descProject2:string = 'Loading...'
  caracProject2:string[] = []
  tecnologiesProj2:string[] = ['ag', 'ts', 'html', 'css']
  linkPage2:string = ''
  linkRepos2:string = ''

  //sobre
  photoProfile:string = ''
  description:string = 'Loading...'
  curriculo: string = ''

  //formacao
  formacao:string = 'Loading...'
  dataInici:string = 'Loading...'
  dataFim:string = 'Loading...'
  instituicao:string = 'Loading...'

  //cursos
  curso: any[] = [] 

  //contato
  phone:string = 'Loading...'
  email:string = 'Loading...'

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

      //sobre
      this.photoProfile = this.data.photoProfile
      this.description = this.data.description
      this.curriculo = this.data.curriculo

      //formacao
      this.formacao = this.data.formacao.name
      this.dataInici = this.data.formacao.dataInicio
      this.dataFim = this.data.formacao.dataFim
      this.instituicao = this.data.formacao.instituicao

      //cursos
      this.data.Cursos.forEach((curso: any, index: number) => {
        if (!this.curso[index]) {
          this.curso[index] = {
            nomeCurso: 'Loading...',
            instituicaoCurso: 'Loading...',
            dataInicCurso: 'Loading...',
            dataFimCurso: 'Loading...',
            horasCurso: 'Loading...',
            habilidadesCurso: []
          };
        }
      
        let cursoAtual = this.curso[index];
        cursoAtual.nomeCurso = curso.name;
        cursoAtual.instituicaoCurso = curso.instituicao;
        cursoAtual.dataInicCurso = curso.dataInicio;
        cursoAtual.dataFimCurso = curso.dataFim;
        cursoAtual.horasCurso = curso.horas;

        if (!cursoAtual.habilidadesCurso) {
          cursoAtual.habilidadesCurso = [];
        }
        
        curso.habilidades.forEach((hab: any, i: number) => {
          cursoAtual.habilidadesCurso[i] = hab.habilidade;
        });
      })  

      //contato
      this.phone = this.data.phone
      this.email = this.data.email
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
