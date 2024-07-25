import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewFolderDialogComponent } from '../new-folder-dialog/new-folder-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  onInputChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.type === 'mail' || input.type === 'password') {
      this.error = ''; // Réinitialise l'erreur lorsqu'il y a une entrée
    }
  }

  openModal(event: MouseEvent) {
    event.preventDefault(); // Empêche la redirection par défaut du lien
    this.modal = true;
  }

   closeModal() {
    this.modal = false;
  }
  

  modal = false;
  login = '';
  password = '';
  error = '';
recup: any;

validation(event: MouseEvent) {
  event.stopPropagation();
  this.modal = true;
}

  récupe() {
    // Ajouter la logique de récupération ici
  }


  modal2: boolean = false;

  toggleModal2() {
    this.modal2 = !this.modal2;
  }

  closeModals() {
    this.modal2 = false;
  }
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(NewFolderDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Dossier créé:', result);
      }
    });
  }


}
