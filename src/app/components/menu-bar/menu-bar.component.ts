import { Component, OnInit } from '@angular/core';
import { ThemaService } from 'src/app/services/thema.service';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {
  tema:string = ''
  menuLinks!: NodeListOf<HTMLElement>

  constructor(private themeService: ThemaService) {
    
   }

  ngOnInit(): void {
    this.themeService.tema$.subscribe(theme => {
      this.tema = theme
    })

    this.menuLinks = document.querySelectorAll('.menu__link')
    this.activeOption()
  }

  activeOption(): void {
    this.menuLinks.forEach(item => {
      item.addEventListener("click", () => {
        this.menuLinks.forEach(i => {
          i.classList.remove('activate')
        })
        item.classList.add('activate')
      })
    })
  }
}
