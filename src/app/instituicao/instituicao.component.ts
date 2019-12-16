import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-instituicao',
  templateUrl: './instituicao.component.html',
  styleUrls: ['./instituicao.component.css']
})
export class InstituicaoComponent implements OnInit {

  instituicoes = [{}]
  
  constructor(private http: HttpClient) { }

  getListainstituicoes = () => {
    const lista = this.http.get<any>(`${environment.server_url}/instituicao`)
    lista.subscribe(instituicoes => {
      this.instituicoes =instituicoes
    })
  }

  ngOnInit() {
    this.getListainstituicoes()}
}
