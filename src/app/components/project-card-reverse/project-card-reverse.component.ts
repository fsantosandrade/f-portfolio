import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ThemaService } from 'src/app/services/thema.service';

@Component({
  selector: 'app-project-card-reverse',
  templateUrl: './project-card-reverse.component.html',
  styleUrls: ['./project-card-reverse.component.css']
})
export class ProjectCardReverseComponent implements OnInit {
  tema:string = ''
  @Input() photoProject:string = ''
  @Input() nameProject:string = ''
  @Input() descProject:string = ''
  @Input() caracProject:string[] = []
  @Input() tecnologies:string[] = []
  tecProject:SafeHtml[] = []
  @Input() linkPage:string = ''
  @Input() linkRepos:string = ''


  constructor(private themeService: ThemaService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.themeService.tema$.subscribe(theme => {
      this.tema = theme
    })

    this.tecProject = this.setTecnologs(this.tecnologies)
  }

  setTecnologs(array:SafeHtml[]):SafeHtml[] {
    return array.map(tec => {
      if(tec == 'ag' || tec == 'Ag' || tec == 'AG') {
        return  this.sanitizer.bypassSecurityTrustHtml(`<svg width="37" height="39" viewBox="0 0 37 39" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.5393 0.269714L36.4703 6.65913L33.7522 30.3912L18.5393 38.809L3.32644 30.3912L0.608398 6.65913L18.5393 0.269714ZM18.5393 4.52932L7.32235 29.6813H11.5008L13.7523 24.0424H23.2858L25.5373 29.6813H29.6954L18.5393 4.52932ZM21.8253 20.5536H15.2736L18.5393 12.7037L21.8253 20.5536Z"/>
            <path d="M18.5393 0.269714L36.4703 6.65913L33.7522 30.3912L18.5393 38.809L3.32644 30.3912L0.608398 6.65913L18.5393 0.269714ZM18.5393 4.52932L7.32235 29.6813H11.5008L13.7523 24.0424H23.2858L25.5373 29.6813H29.6954L18.5393 4.52932ZM21.8253 20.5536H15.2736L18.5393 12.7037L21.8253 20.5536Z"/>
          </svg>`)
      }else if(tec == 'ts' || tec == 'Ts' || tec == 'TS'){
        return  this.sanitizer.bypassSecurityTrustHtml(`<svg width="40" height="39" viewBox="0 0 40 39" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.910156 19.5394V38.809H39.4495V0.269714H0.910156V19.5394ZM31.9656 18.0026C32.8895 18.2202 33.7292 18.7043 34.3804 19.3949C34.732 19.7706 35.2583 20.4607 35.3029 20.6305C35.3149 20.6811 33.6409 21.8036 32.6244 22.431C32.5871 22.4563 32.4365 22.2998 32.2727 22.0541C31.7777 21.3327 31.2563 21.0195 30.4602 20.9629C29.2932 20.887 28.5404 21.4965 28.5465 22.5189C28.5403 22.7691 28.5962 23.017 28.7091 23.2404C28.9668 23.7739 29.4497 24.093 30.9419 24.7398C33.7023 25.9249 34.8814 26.7089 35.6148 27.8193C36.4362 29.061 36.618 31.0434 36.0664 32.5235C35.4522 34.1229 33.9335 35.214 31.8006 35.5717C31.1418 35.691 29.5738 35.6717 28.8644 35.5404C27.3156 35.2646 25.8475 34.4987 24.9442 33.4954C24.5865 33.1064 23.8965 32.0839 23.941 32.0153C23.9603 31.99 24.1169 31.89 24.2927 31.7889L25.7235 30.9603L26.8339 30.3147L27.0663 30.6592C27.3927 31.1542 28.1009 31.8322 28.5284 32.0574C29.758 32.7102 31.4453 32.6163 32.28 31.8696C32.6184 31.5877 32.8075 31.1542 32.7822 30.7158C32.7822 30.2702 32.7256 30.0702 32.4931 29.7366C32.192 29.3103 31.5838 28.9466 29.846 28.1939C27.8576 27.334 26.9977 26.8077 26.2209 25.961C25.7318 25.4037 25.3702 24.7465 25.161 24.0352C25.0165 23.4897 24.9792 22.1215 25.0924 21.5759C25.5007 19.6502 26.9555 18.3145 29.0439 17.9195C29.7219 17.7882 31.302 17.8376 31.9668 18.0014L31.9656 18.0026ZM22.9209 19.6153L22.933 21.1893H17.9144V35.4477H14.364V21.1893H9.35268V19.6466C9.35268 18.7867 9.37195 18.0725 9.39603 18.0532C9.4153 18.0279 12.4635 18.0159 16.1645 18.0219L22.9017 18.0412L22.9209 19.6153Z"/>
            <path d="M0.910156 19.5394V38.809H39.4495V0.269714H0.910156V19.5394ZM31.9656 18.0026C32.8895 18.2202 33.7292 18.7043 34.3804 19.3949C34.732 19.7706 35.2583 20.4607 35.3029 20.6305C35.3149 20.6811 33.6409 21.8036 32.6244 22.431C32.5871 22.4563 32.4365 22.2998 32.2727 22.0541C31.7777 21.3327 31.2563 21.0195 30.4602 20.9629C29.2932 20.887 28.5404 21.4965 28.5465 22.5189C28.5403 22.7691 28.5962 23.017 28.7091 23.2404C28.9668 23.7739 29.4497 24.093 30.9419 24.7398C33.7023 25.9249 34.8814 26.7089 35.6148 27.8193C36.4362 29.061 36.618 31.0434 36.0664 32.5235C35.4522 34.1229 33.9335 35.214 31.8006 35.5717C31.1418 35.691 29.5738 35.6717 28.8644 35.5404C27.3156 35.2646 25.8475 34.4987 24.9442 33.4954C24.5865 33.1064 23.8965 32.0839 23.941 32.0153C23.9603 31.99 24.1169 31.89 24.2927 31.7889L25.7235 30.9603L26.8339 30.3147L27.0663 30.6592C27.3927 31.1542 28.1009 31.8322 28.5284 32.0574C29.758 32.7102 31.4453 32.6163 32.28 31.8696C32.6184 31.5877 32.8075 31.1542 32.7822 30.7158C32.7822 30.2702 32.7256 30.0702 32.4931 29.7366C32.192 29.3103 31.5838 28.9466 29.846 28.1939C27.8576 27.334 26.9977 26.8077 26.2209 25.961C25.7318 25.4037 25.3702 24.7465 25.161 24.0352C25.0165 23.4897 24.9792 22.1215 25.0924 21.5759C25.5007 19.6502 26.9555 18.3145 29.0439 17.9195C29.7219 17.7882 31.302 17.8376 31.9668 18.0014L31.9656 18.0026ZM22.9209 19.6153L22.933 21.1893H17.9144V35.4477H14.364V21.1893H9.35268V19.6466C9.35268 18.7867 9.37195 18.0725 9.39603 18.0532C9.4153 18.0279 12.4635 18.0159 16.1645 18.0219L22.9017 18.0412L22.9209 19.6153Z"/>
          </svg>`)
      }else if(tec == 'html' || tec == 'Html' || tec == 'HTML'){
        return  this.sanitizer.bypassSecurityTrustHtml(`<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
            <path d="M 45.273438 2.324219 C 45.085938 2.117188 44.816406 2 44.535156 2 L 5.464844 2 C 5.183594 2 4.914063 2.117188 4.726563 2.324219 C 4.535156 2.53125 4.441406 2.808594 4.46875 3.089844 L 7.988281 42.515625 C 8.023438 42.929688 8.3125 43.273438 8.710938 43.390625 L 24.722656 47.960938 C 24.808594 47.988281 24.902344 48 24.996094 48 C 25.089844 48 25.179688 47.988281 25.269531 47.960938 L 41.292969 43.390625 C 41.691406 43.273438 41.976563 42.929688 42.015625 42.515625 L 45.53125 3.089844 C 45.558594 2.808594 45.464844 2.53125 45.273438 2.324219 Z M 36.847656 15.917969 L 18.035156 15.917969 L 18.484375 21.007813 L 36.394531 21.007813 L 35.050781 36.050781 L 24.992188 39.089844 L 24.894531 39.058594 L 14.953125 36.046875 L 14.410156 29.917969 L 19.28125 29.917969 L 19.492188 32.296875 L 25.050781 33.460938 L 30.507813 32.296875 L 31.089844 25.859375 L 14.046875 25.859375 L 12.722656 11.054688 L 37.28125 11.054688 Z"></path>
          </svg>`)
      }else if(tec == 'css' || tec == 'Css' || tec == 'CSS'){
        return  this.sanitizer.bypassSecurityTrustHtml(`<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
            <path fill-rule="evenodd" d="M 42 6 L 39 40 L 25 44 L 11 40 L 8 6 Z M 16.800781 28 L 20.800781 28 L 20.898438 30.5 L 25 31.898438 L 29.101563 30.5 L 29.398438 26 L 20.601563 26 L 20.398438 22 L 29.601563 22 L 29.898438 18 L 16.101563 18 L 15.800781 14 L 34.101563 14 L 33.601563 22 L 32.898438 33.5 L 25 36.101563 L 17.101563 33.5 Z"></path>
          </svg>`)
      }else if(tec == 'js' || tec == 'Js' || tec == 'JS'){
        return  this.sanitizer.bypassSecurityTrustHtml(`<svg class="filled-icon" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
  <path d="M 43.335938 4 L 6.667969 4 C 5.195313 4 4 5.195313 4 6.667969 L 4 43.332031 C 4 44.804688 5.195313 46 6.667969 46 L 43.332031 46 C 44.804688 46 46 44.804688 46 43.335938 L 46 6.667969 C 46 5.195313 44.804688 4 43.335938 4 Z M 27 36.183594 C 27 40.179688 24.65625 42 21.234375 42 C 18.140625 42 15.910156 39.925781 15 38 L 18.144531 36.097656 C 18.75 37.171875 19.671875 38 21 38 C 22.269531 38 23 37.503906 23 35.574219 L 23 23 L 27 23 Z M 35.675781 42 C 32.132813 42 30.121094 40.214844 29 38 L 32 36 C 32.816406 37.335938 33.707031 38.613281 35.589844 38.613281 C 37.171875 38.613281 38 37.824219 38 36.730469 C 38 35.425781 37.140625 34.960938 35.402344 34.199219 L 34.449219 33.789063 C 31.695313 32.617188 29.863281 31.148438 29.863281 28.039063 C 29.863281 25.179688 32.046875 23 35.453125 23 C 37.878906 23 39.621094 23.84375 40.878906 26.054688 L 37.910156 27.964844 C 37.253906 26.789063 36.550781 26.328125 35.453125 26.328125 C 34.335938 26.328125 33.628906 27.039063 33.628906 27.964844 C 33.628906 29.109375 34.335938 29.570313 35.972656 30.28125 L 36.925781 30.691406 C 40.171875 32.078125 42 33.496094 42 36.683594 C 42 40.117188 39.300781 42 35.675781 42 Z" />
</svg>`)
      }
      return tec
    })
  }
}
