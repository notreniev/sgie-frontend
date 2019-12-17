import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-instituicao-edicao',
  templateUrl: './instituicao-edicao.component.html',
  styleUrls: ['./instituicao-edicao.component.css']
})
export class InstituicaoEdicaoComponent implements OnInit {

  instituicao: any = {}
  message: any = {}
  error = {}

  constructor(
    private http: HttpClient,
    private activeRoute: ActivatedRoute,
    private route: Router) { }

  getDadosInstituicao = async () => {
    let id = this.activeRoute.snapshot.paramMap.get('id')
    if (id != 'add') {
      this.instituicao = await this.http.get<any>(`${environment.server_url}/instituicao/${id}`).toPromise()
    }
  }

  save = async (instituicao) => {
    let header: HttpHeaders = new HttpHeaders().set('Content-Type', 'application/json')

    const { id } = instituicao
    instituicao.status = !instituicao.status ? 0 : 1
    const params = { instituicao: instituicao }

    if (id && id != 'add') {
      await this.http.patch(`${environment.server_url}/instituicao/${id}`, params, { headers: header }).toPromise()
        .then(() => {
          this.message.success = 'Dados alterados com sucesso!!'
          setTimeout(() => {
            this.route.navigate(['/instituicao'])
          }, environment.tempo_resposta)
        })
        .catch(err => {
          console.error('Erro ao tentar alterar instituição', err)
          this.message.error = 'Erro ao tentar alterar instituição!!'
        })
    } else {
      await this.http.post(`${environment.server_url}/instituicao`, params, { headers: header }).toPromise()
        .then(() => {
          this.message.success = 'Dados salvos com sucesso!!'
          setTimeout(() => {
            this.route.navigate(['/instituicao'])
          }, environment.tempo_resposta)

        })
        .catch(err => {
          console.error('erro ao tentar salvar instituição', err)
          this.message.error = 'Erro ao tentar salvar instituição!! ' + err
        })
    }
  }

  delete = async (instituicao) => {
    await this.http.delete(`${environment.server_url}/instituicao/${instituicao.id}`).toPromise()
      .then(() => {
        console.log('Instituição deletada com sucesso')
        this.message.success = 'Instituição deletad com sucesso!!'
        setTimeout(() => {
          this.route.navigate(['/instituicao'])
        }, environment.tempo_resposta)

      })
      .catch(err => {
        console.error('Erro ao tentar deletar instituição', err)
        setTimeout(() => {
          this.message.error = 'Erro ao tentar deletar instituição!!'
        }, environment.tempo_resposta)

      })
  }

  cancel() {
    this.route.navigate(['/instituicao'])
  }

  ngOnInit() {
    this.getDadosInstituicao()
  }

}
