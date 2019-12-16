import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunoEdicaoComponent } from './aluno-edicao.component';

describe('AlunoEdicaoComponent', () => {
  let component: AlunoEdicaoComponent;
  let fixture: ComponentFixture<AlunoEdicaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlunoEdicaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlunoEdicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
