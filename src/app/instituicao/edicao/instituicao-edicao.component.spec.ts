import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstituicaoEdicaoComponent } from './instituicao-edicao.component';

describe('InstituicaoEdicaoComponent', () => {
  let component: InstituicaoEdicaoComponent;
  let fixture: ComponentFixture<InstituicaoEdicaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstituicaoEdicaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstituicaoEdicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
