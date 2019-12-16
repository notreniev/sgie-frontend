import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  cursos = [{}]
  
  constructor(private http: HttpClient) { }

  getListaCursos = () => {
    const lista = this.http.get<any>(`${environment.server_url}/curso`)
    lista.subscribe(cursos => {
      this.cursos =cursos
    })
  }

  ngOnInit() {
    this.getListaCursos()}

}
