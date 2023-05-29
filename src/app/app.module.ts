import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OutfitModule } from './outfit/outfit.module';
import { MarcaModule } from './marca/marca.module';
import { PrendaModule } from './prenda/prenda.module';
import { TiendafisicaModule } from './tiendafisica/tiendafisica.module';
import { UsuarioModule } from './usuario/usuario.module';
import { ComentarioModule } from './comentario/comentario.module';
import { RouterModule, Routes } from '@angular/router';
import { OutfitListComponent } from './outfit/outfit-list/outfit-list.component';
import { PrendaListComponent } from './prenda/prenda-list/prenda-list.component';
import { MarcaListComponent } from './marca/marca-list/marca-list.component';
import { TiendafisicaListComponent } from './tiendafisica/tiendafisica-list/tiendafisica-list.component';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';
import { NotFoundComponent } from './NotFound/NotFound.component';
import { OutfitDetailComponent } from './outfit/outfit-detail/outfit-detail.component';
import { PrendaDetailComponent } from './prenda/prenda-detail/prenda-detail.component';
import { MarcaDetailComponent } from './marca/marca-detail/marca-detail.component';
import { TiendafisicaDetailComponent } from './tiendafisica/tiendafisica-detail/tiendafisica-detail.component';

const appRoute: Routes = [
  {path: '', component: HomeComponent},
  {path: 'Outfits', component: OutfitListComponent},
  {path: 'Outfits/:id', component: OutfitDetailComponent},
  {path: 'Prendas', component: PrendaListComponent},
  {path: 'Prendas/:id', component: PrendaDetailComponent},
  {path: 'Marcas', component: MarcaListComponent},
  {path: 'Marcas/:id', component: MarcaDetailComponent},
  {path: 'Tiendas', component: TiendafisicaListComponent},
  {path: 'Tiendas/:id', component: TiendafisicaDetailComponent},
  {path: '**', component: NotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OutfitModule,
    MarcaModule,
    PrendaModule,
    TiendafisicaModule,
    UsuarioModule,
    ComentarioModule,
    HttpClientModule,
    HomeModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
