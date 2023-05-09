import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OutfitModule } from './outfit/outfit.module';
import { MarcaModule } from './marca/marca.module';
import { PrendaModule } from './prenda/prenda.module';
import { UsuarioModule } from './usuario/usuario.module';
import { ComentarioModule } from './comentario/comentario.module';


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
    UsuarioModule,
    ComentarioModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
