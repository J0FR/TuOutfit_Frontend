// usuario-list.component.spec.ts

import { ComponentFixture, TestBed, fakeAsync, flush, tick } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { UsuarioListComponent } from './usuario-list.component';
import { UsuarioService } from '../usuario.service';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioDetail } from '../usuario-detail';
import { By } from '@angular/platform-browser';

describe('UsuarioListComponent', () => {
  let component: UsuarioListComponent;
  let fixture: ComponentFixture<UsuarioListComponent>;
  let usuarioService: UsuarioService;
  const testUsuarios: UsuarioDetail[] = [
    new UsuarioDetail(1, 'Test User 1', 'male', 30, 'test1@example.com', [], []),
    new UsuarioDetail(2, 'Test User 2', 'female', 25, 'test2@example.com', [], []),
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [UsuarioListComponent],
      providers: [UsuarioService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioListComponent);
    component = fixture.componentInstance;
    usuarioService = TestBed.inject(UsuarioService);

    spyOn(usuarioService, 'getUsuarios').and.returnValue(of(testUsuarios));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getUsuarios on init', () => {
    expect(usuarioService.getUsuarios).toHaveBeenCalled();
  });

  it('should select a user when onSelected is called', () => {
    let userDetail = new UsuarioDetail(1, 'Test User 1', 'male', 30, 'test1@example.com', [], []);
    component.onSelected(userDetail);
    expect(component.selected).toBeTrue();
    expect(component.selectedUsuario).toBe(userDetail);
  });

    it('should update state on onSelected()', fakeAsync(() => {
      let userDetail = new UsuarioDetail(1, 'Test User 1', 'male', 30, 'test1@example.com', [], []);
      component.onSelected(userDetail);
      expect(component.selected).toBeTrue();
      expect(component.selectedUsuario).toBe(userDetail);
    }));

    it('should update usuarios after calling getUsuarios', () => {
      component.getUsuarios();
      expect(component.usuarios).toBe(testUsuarios);
    });

    it('should display user detail when a user is selected', () => {
      let userDetail = new UsuarioDetail(1, 'Test User 1', 'male', 30, 'test1@example.com', [], []);
      component.onSelected(userDetail);
      fixture.detectChanges();

      const userDetailElement = fixture.debugElement.query(By.css('app-usuario-detail'));
      expect(userDetailElement).toBeTruthy();
    });

    it('should display user list after getUsuarios', () => {
      component.getUsuarios();
      fixture.detectChanges();

      const userElements = fixture.debugElement.queryAll(By.css('.col'));
      expect(userElements.length).toBe(2);
    });


});
