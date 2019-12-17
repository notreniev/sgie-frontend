import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-curso-edicao',
  templateUrl: './curso-edicao.component.html',
  styleUrls: ['./curso-edicao.component.css']
})
export class CursoEdicaoComponent implements OnInit {

  curso: any = {}
  message: any = {}
  error = {}

  constructor(
    private http: HttpClient,
    private activeRoute: ActivatedRoute,
    private route: Router) { }

  getDadosCurso = async () => {
    let id = this.activeRoute.snapshot.paramMap.get('id')
    if (id != 'add') {
      this.curso = await this.http.get<any>(`${environment.server_url}/curso/${id}`).toPromise()
    }
  }

  save = async (curso) => {
    let header: HttpHeaders = new HttpHeaders().set('Content-Type', 'application/json')

    const { id } = curso
    curso.status = !curso.status ? 0 : 1
    const params = { curso: curso }

    if (id && id != 'add') {
      await this.http.patch(`${environment.server_url}/curso/${id}`, params, { headers: header }).toPromise()
        .then(() => {
          this.message.success = 'Dados alterados com sucesso!!'
          setTimeout(() => {
            this.route.navigate(['/curso'])
          }, environment.tempo_resposta)
        })
        .catch(err => {
          console.error('Erro ao tentar alterar curso', err)
          this.message.error = 'Erro ao tentar alterar curso!!'
        })
    } else {
      await this.http.post(`${environment.server_url}/curso`, params, { headers: header }).toPromise()
        .then(() => {
          this.message.success = 'Dados salvos com sucesso!!'
          setTimeout(() => {
            this.route.navigate(['/curso'])
          }, environment.tempo_resposta)

        })
        .catch(err => {
          console.error('erro ao tentar salvar curso', err)
          this.message.error = 'Erro ao tentar salvar curso!! ' + err
        })
    }
  }

  delete = async (curso) => {
    await this.http.delete(`${environment.server_url}/curso/${curso.id}`).toPromise()
      .then(() => {
        console.log('Curso deletado com sucesso')
        this.message.success = 'Curso deletado com sucesso!!'
        setTimeout(() => {
          this.route.navigate(['/curso'])
        }, environment.tempo_resposta)

      })
      .catch(err => {
        console.error('Erro ao tentar deletar curso', err)
        setTimeout(() => {
          this.message.error = 'Erro ao tentar deletar curso!!'
        }, environment.tempo_resposta)

      })
  }

  cancel() {
    this.route.navigate(['/curso'])
  }

  ngOnInit() {
    this.getDadosCurso()
  }
}
