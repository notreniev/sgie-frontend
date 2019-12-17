import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-aluno-edicao',
  templateUrl: './aluno-edicao.component.html',
  styleUrls: ['./aluno-edicao.component.css']
})
export class AlunoEdicaoComponent implements OnInit {

  aluno: any = {}
  error: any = {}
  message: any = {}
  ufs

  constructor(
    private http: HttpClient, 
    public activeRoute: ActivatedRoute,
    private route: Router) {
  }

  public getJSON(): Observable<any> {
    return this.http.get("./assets/ufs.json");
  }

  getDadosAluno = async () => {
    let id = this.activeRoute.snapshot.paramMap.get('id')
    if (id != 'add') {
      this.aluno = await this.http.get<any>(`${environment.server_url}/aluno/${id}`).toPromise()
    }
  }

  buscaCep = async (numCep) => {

    if (!numCep) {
      this.error = {}
      return
    }

    const search = await this.http.get<any>(`${environment.server_url}/cep/${numCep}`).toPromise()
    if (search.result) {
      this.aluno.cep = search.result.cep
      this.aluno.endereco = search.result.end
      this.aluno.bairro = search.result.bairro
      this.aluno.cidade = search.result.cidade
      this.aluno.uf = search.result.uf
      this.error = {}
    } else {
      const { code, message } = search.error
      this.error = { code, message }
      this.aluno = {}
    }
  }

  save = async (aluno) => {
    let header: HttpHeaders = new HttpHeaders().set('Content-Type', 'application/json')
    
    const { id } = aluno
    aluno.status = aluno.status != 0 ? 1 : 0
    const params:any = { aluno: aluno }

    if (id && id != 'add'){
      await this.http.patch(`${environment.server_url}/aluno/${id}`, params, { headers: header }).toPromise()
      .then(() => {
        this.message.success = 'Dados alterados com sucesso!!'
        setTimeout(() => {
          this.route.navigate(['/aluno'])
        }, environment.tempo_resposta)
      })
      .catch(err => {
        console.error('Erro ao tentar alterar aluno', err)
        this.message.error = 'Erro ao tentar alterar aluno!!'
      })
    }else{
      await this.http.post(`${environment.server_url}/aluno`, params, { headers: header }).toPromise()
        .then(() => {
          this.message.success = 'Dados salvos com sucesso!!'
          setTimeout(() => {
            this.route.navigate(['/aluno'])
          }, environment.tempo_resposta)
        })
        .catch(err => {
          console.error('Erro ao tentar salvar aluno', err)
          this.message.error = 'Erro ao tentar salvar aluno!!'
        })
    }
  }

  delete = async (aluno) => {
    await this.http.delete(`${environment.server_url}/aluno/${aluno.id}`).toPromise()
    .then(() => {
      this.message.success = 'Aluno deletado com sucesso!!'
      setTimeout(() => {
        this.route.navigate(['/aluno'])
      }, environment.tempo_resposta)

    })
    .catch(err => {
      console.error('erro ao tentar deletar aluno', err)
      this.message.error = 'Erro ao tentar deletar aluno!!'
    })
  }

  cancel(){
    this.route.navigate(['/aluno'])
  }

  ngOnInit() {
    this.getJSON().subscribe(data => {
      this.ufs = data
    })

    this.getDadosAluno()
  }

}
