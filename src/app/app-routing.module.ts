import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './NotFound/NotFound.component';
import { HomeComponent } from './home/home.component';
import { MarcaDetailComponent } from './marca/marca-detail/marca-detail.component';
import { MarcaListComponent } from './marca/marca-list/marca-list.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { OutfitCreateComponent } from './outfit/outfit-create/outfit-create.component';
import { OutfitDetailComponent } from './outfit/outfit-detail/outfit-detail.component';
import { OutfitListComponent } from './outfit/outfit-list/outfit-list.component';
import { PrendaDetailComponent } from './prenda/prenda-detail/prenda-detail.component';
import { PrendaListComponent } from './prenda/prenda-list/prenda-list.component';
import { TiendafisicaDetailComponent } from './tiendafisica/tiendafisica-detail/tiendafisica-detail.component';
import { TiendafisicaListComponent } from './tiendafisica/tiendafisica-list/tiendafisica-list.component';
import { LoginComponent } from './usuario/login/login.component';
import { SignupComponent } from './usuario/signup/signup.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'Outfits/outfit-create', component: OutfitCreateComponent},
  {path: 'Outfits', component: OutfitListComponent},
  {path: 'Outfits/:id', component: OutfitDetailComponent},
  {path: 'Prendas', component: PrendaListComponent},
  {path: 'Prendas/:id', component: PrendaDetailComponent},
  {path: 'Marcas', component: MarcaListComponent},
  {path: 'Marcas/:id', component: MarcaDetailComponent},
  {path: 'Tiendas', component: TiendafisicaListComponent},
  {path: 'Tiendas/:id', component: TiendafisicaDetailComponent},
  {path: 'Nosotros', component: NosotrosComponent},
  {path: 'Login', component: LoginComponent},
  {path: 'Signup', component: SignupComponent},
  {path: '**', component: NotFoundComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
