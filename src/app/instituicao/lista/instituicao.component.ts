import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instituicao',
  templateUrl: './instituicao.component.html',
  styleUrls: ['./instituicao.component.css']
})
export class InstituicaoComponent implements OnInit {

  @ViewChild('search', { static: false }) mySearch: ElementRef
  instituicoes = [{}]
  filtro: string = undefined
  messages

  constructor(
    private http: HttpClient,
    private router: Router) { }

  getListainstituicoes = async () => {
    try {
      const lista = this.http.get<any>(`${environment.server_url}/instituicao`)
      this.instituicoes = await lista.toPromise()
    } catch (error) {
      this.messages = error.status === 404 ? "Nenhum registro encontrado" : error
    }
  }

  novo(){
    this.router.navigate(['/instituicao/add'])
  }

  ngOnInit() {
    this.getListainstituicoes()
  }

  @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    this.mySearch.nativeElement.value = ""
    this.filtro = undefined
  }

}
