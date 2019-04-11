import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnnoncesComponent } from './annonces/annonces.component';
import { AnnoncesService } from './annonces.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { MandataireComponent } from './mandataire/mandataire.component';
import { MandataireService } from './mandataire.service';

@NgModule({
  declarations: [
    AppComponent,
    AnnoncesComponent,
    MandataireComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
  ],
  providers: [AnnoncesService, MandataireService],
  bootstrap: [AppComponent]
})
export class AppModule { }
