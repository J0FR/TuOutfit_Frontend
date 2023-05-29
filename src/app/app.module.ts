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

const appRoute: Routes = [
  {path: '', component: HomeComponent},
  {path: 'Outfits', component: OutfitListComponent},
  {path: 'Prendas', component: PrendaListComponent},
  {path: 'Marcas', component: MarcaListComponent},
  {path: 'Tiendas', component: TiendafisicaListComponent},
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
