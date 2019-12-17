import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  @ViewChild('search', { static: false }) mySearch: ElementRef
  cursos = [{}]
  filtro: string = undefined
  messages

  constructor(
    private http: HttpClient,
    private router: Router) { }

  getListaCursos = async () => {
    try {
      const lista = this.http.get<any>(`${environment.server_url}/curso`)
      this.cursos = await lista.toPromise()
    } catch (error) {
      this.messages = error.status === 404 ? "Nenhum registro encontrado" : ""
    }
  }

  novo() {
    this.router.navigate(['/curso/add'])
  }

  ngOnInit() {
    this.getListaCursos()
  }

  @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    this.mySearch.nativeElement.value = ""
    this.filtro = undefined
  }

}
