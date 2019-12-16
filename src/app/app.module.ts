import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AlunoEdicaoComponent } from './aluno/edicao/aluno-edicao.component';
import { AlunoComponent } from './aluno/lista/aluno.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursoEdicaoComponent } from './curso/edicao/curso-edicao.component';
import { CursoComponent } from './curso/lista/curso.component';
import { HomeComponent } from './home/home.component';
import { InstituicaoEdicaoComponent } from './instituicao/edicao/instituicao-edicao.component';
import { InstituicaoComponent } from './instituicao/lista/instituicao.component';


@NgModule({
  declarations: [
    AppComponent,
    AlunoComponent,
    CursoComponent,
    InstituicaoComponent,
    HomeComponent,
    AlunoEdicaoComponent,
    CursoEdicaoComponent,
    InstituicaoEdicaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
