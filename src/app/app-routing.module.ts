import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlunoComponent } from './aluno/aluno.component';
import { CursoComponent } from './curso/curso.component';
import { HomeComponent } from './home/home.component';
import { InstituicaoComponent } from './instituicao/instituicao.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'aluno', component: AlunoComponent },
  { path: 'curso', component: CursoComponent },
  { path: 'instituicao', component: InstituicaoComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  routes
}
