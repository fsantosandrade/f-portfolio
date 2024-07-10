import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    ContatoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
