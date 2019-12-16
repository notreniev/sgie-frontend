import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoEdicaoComponent } from './curso-edicao.component';

describe('CursoEdicaoComponent', () => {
  let component: CursoEdicaoComponent;
  let fixture: ComponentFixture<CursoEdicaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursoEdicaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoEdicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
