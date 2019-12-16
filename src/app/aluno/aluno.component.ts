import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {
  alunos = [{}]
  
  constructor(private http: HttpClient) { }

  getListaAlunos = () => {
    const lista = this.http.get<any>(`${environment.server_url}/aluno`)
    lista.subscribe(alunos => {
      this.alunos = alunos
    })
  }

  ngOnInit() {
    this.getListaAlunos()
  }

}
