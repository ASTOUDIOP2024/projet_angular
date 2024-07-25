import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageInscriptionComponent } from './PageInscription/PageInscription.component';
import { PageConnexionComponent } from './PageConnexion/PageConnextion.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { CardSectionComponent } from './card-section/card-section.component';


const routes: Routes = [
  { path: 'inscription', component: PageInscriptionComponent },
  { path: 'connexion', component: PageConnexionComponent },
  { path: 'formulaire', component: FormulaireComponent },
  { path: 'card', component: CardSectionComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: 'connexion', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
