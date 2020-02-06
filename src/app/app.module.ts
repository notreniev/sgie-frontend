import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { AlunoEdicaoComponent } from './aluno/edicao/aluno-edicao.component';
import { AlunoComponent } from './aluno/lista/aluno.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursoEdicaoComponent } from './curso/edicao/curso-edicao.component';
import { CursoComponent } from './curso/lista/curso.component';
import { HomeComponent } from './home/home.component';
import { InstituicaoEdicaoComponent } from './instituicao/edicao/instituicao-edicao.component';
import { InstituicaoComponent } from './instituicao/lista/instituicao.component';
import { SearchPipe } from './pipes/search.pipe';

export let options: Partial<IConfig> | (() => Partial<IConfig>);

@NgModule({
  declarations: [
    AppComponent,
    AlunoComponent,
    CursoComponent,
    InstituicaoComponent,
    HomeComponent,
    AlunoEdicaoComponent,
    CursoEdicaoComponent,
    InstituicaoEdicaoComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxMaskModule.forRoot(options)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
