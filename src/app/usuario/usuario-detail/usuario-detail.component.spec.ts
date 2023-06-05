import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsuarioDetailComponent } from './usuario-detail.component';
import { UsuarioDetail } from '../usuario-detail';

describe('UsuarioDetailComponent', () => {
  let component: UsuarioDetailComponent;
  let fixture: ComponentFixture<UsuarioDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsuarioDetailComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioDetailComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the user name', () => {
    const userName = 'John Doe';
    const usuarioDetail: UsuarioDetail = {
      id: 1,
      nombre: userName,
      genero: 'Male',
      edad: 25,
      email: 'john@example.com',
      comentarios: [],
      outfits_favoritos: []
    };
    component.usuarioDetail = usuarioDetail;
    fixture.detectChanges();
    const element = fixture.nativeElement.querySelector('p');
    expect(element.textContent).toContain(userName);
  });

  it('should render the user gender and age', () => {
    const userGender = 'Male';
    const userAge = 25;
    const usuarioDetail: UsuarioDetail = {
      id: 1,
      nombre: 'John Doe',
      genero: userGender,
      edad: userAge,
      email: 'john@example.com',
      comentarios: [],
      outfits_favoritos: []
    };
    component.usuarioDetail = usuarioDetail;
    fixture.detectChanges();
    const genderElement = fixture.nativeElement.querySelector('.genero');
    const ageElement = fixture.nativeElement.querySelector('.edad');
    expect(genderElement.textContent).toContain(userGender);
    expect(ageElement.textContent).toContain(userAge.toString());
  });

  it('should render the correct user name, gender, and age when usuarioDetail is provided', () => {
    const usuarioDetail: UsuarioDetail = {
      id: 1,
      nombre: 'John Doe',
      genero: 'Male',
      edad: 25,
      email: 'john@example.com',
      comentarios: [],
      outfits_favoritos: []
    };
    component.usuarioDetail = usuarioDetail;
    fixture.detectChanges();
    const element = fixture.nativeElement.querySelector('p');
    const genderElement = fixture.nativeElement.querySelector('.genero');
    const ageElement = fixture.nativeElement.querySelector('.edad');
    expect(element.textContent).toContain(usuarioDetail.nombre);
    expect(genderElement.textContent).toContain(usuarioDetail.genero);
    expect(ageElement.textContent).toContain(usuarioDetail.edad.toString());
  });
});
