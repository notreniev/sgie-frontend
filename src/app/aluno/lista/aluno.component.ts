import { HttpClient } from '@angular/common/http';
import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {
  
  @ViewChild('search', { static: false }) mySearch: ElementRef
  alunos = [{}]
  filtro: string = undefined
  
  constructor(
    private http: HttpClient,
    private route: Router) { }

  getListaAlunos = () => {
    const lista = this.http.get<any>(`${environment.server_url}/aluno`)
    lista.subscribe(alunos => {
      this.alunos = alunos
    })
  }

  novo(){
    console.log('novo')
    this.route.navigate(['/aluno/add'])
  }

  ngOnInit() {
    this.getListaAlunos()
  }

  @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    this.mySearch.nativeElement.value = ""
    this.filtro = undefined
  }

}
