import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPorCedulaComponent } from './listar-por-cedula.component';

describe('ListarPorCedulaComponent', () => {
  let component: ListarPorCedulaComponent;
  let fixture: ComponentFixture<ListarPorCedulaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarPorCedulaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPorCedulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
