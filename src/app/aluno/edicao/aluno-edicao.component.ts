import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-aluno-edicao',
  templateUrl: './aluno-edicao.component.html',
  styleUrls: ['./aluno-edicao.component.css']
})
export class AlunoEdicaoComponent implements OnInit {

  aluno: any = {}
  ufs

  constructor(private http: HttpClient) {
  }

  public getJSON(): Observable<any> {
    return this.http.get("./assets/ufs.json");
  }

  buscaCep = async (numCep) => {
    const result = await this.http.get<any>(`${environment.server_url}/cep/${numCep}`).toPromise()
    try {
      this.aluno.endereco = result.result[0].end
      this.aluno.numero = result.result[0].numero
      this.aluno.complemento = result.result[0].complemento2
      this.aluno.bairro = result.result[0].bairro
      this.aluno.cidade = result.result[0].cidade
      this.aluno.uf = result.result[0].uf
    } catch (error) {
      console.log('error', error)
    }    
  }

  save(aluno) {
    console.log('aluno salvar', aluno)
  }

  ngOnInit() {
    this.getJSON().subscribe(data => {
      this.ufs = data
    })
  }

}
