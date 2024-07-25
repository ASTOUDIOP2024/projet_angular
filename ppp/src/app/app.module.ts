import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageConnexionComponent } from "./PageConnexion/PageConnextion.component";
import { PageInscriptionComponent } from './PageInscription/PageInscription.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { CardSectionComponent } from "./card-section/card-section.component";
import { CommonModule } from '@angular/common';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon'
import { NewFolderDialogComponent } from './new-folder-dialog/new-folder-dialog.component';
@NgModule({
  declarations: [
    AppComponent,
    NewFolderDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PageConnexionComponent,
    PageInscriptionComponent,
    FormulaireComponent,
    DashboardComponent,
    CardSectionComponent,
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ],

  providers: [
    // provideClientHydration()
  
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
  
})
export class AppModule { }



