import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements OnInit {
  @Input() photoProject:string = ''
  @Input() nameProject:string = ''
  @Input() descProject:string = ''
  @Input() caracProject:string[] = []
  @Input() tecProject:string[] = []
  @Input() linkPage:string = ''
  @Input() linkRepos:string = ''


  constructor() { }

  ngOnInit(): void {
  }

}
