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
    const fileUrl = this.curriculo;
    console.log('File URL:', fileUrl);
    fetch(fileUrl, { mode: 'cors' }) // Adicionando modo CORS
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        console.log('Fetch response:', response);
        return response.blob();
      })
      .then(blob => {
        console.log('Blob criado:', blob);
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'Currículo_Felipe.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch(error => console.error('Erro ao baixar o arquivo:', error));
  }  
  
}
