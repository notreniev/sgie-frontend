import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {

  @ViewChild('search', { static: false }) mySearch: ElementRef
  alunos = [{}]
  filtro: string = undefined
  messages

  constructor(
    private http: HttpClient,
    private router: Router) { }

  getListaAlunos = async () => {
    try {
      const lista = this.http.get<any>(`${environment.server_url}/aluno`)
      this.alunos = await lista.toPromise()
    } catch (error) {
      this.messages = error.status === 404 ? "Nenhum registro encontrado" : ""
    }
  }

  novo() {
    this.router.navigate(['/aluno/add'])
  }

  ngOnInit() {
    this.getListaAlunos()
  }

  @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    this.mySearch.nativeElement.value = ""
    this.filtro = undefined
  }

}
