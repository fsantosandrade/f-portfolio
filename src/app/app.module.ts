import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { MainComponent } from './components/main/main.component';
import { HabilidadesPrincipaisComponent } from './components/habilidades-principais/habilidades-principais.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { FormacaoComponent } from './components/formacao/formacao.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { ContatoComponent } from './components/contato/contato.component';
import { MenuDesktopComponent } from './components/menu-desktop/menu-desktop.component';
import { ProjectCardReverseComponent } from './components/project-card-reverse/project-card-reverse.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    MainComponent,
    HabilidadesPrincipaisComponent,
    ProjectCardComponent,
    SobreComponent,
    FormacaoComponent,
    CursosComponent,
    ContatoComponent,
    MenuDesktopComponent,
    ProjectCardReverseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
