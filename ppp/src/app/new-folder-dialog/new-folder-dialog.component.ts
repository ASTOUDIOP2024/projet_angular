import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-new-folder-dialog',
  templateUrl: './new-folder-dialog.component.html',
  styleUrls: ['./new-folder-dialog.component.css']
})
export class NewFolderDialogComponent {
  folderName: string = '';
  colors: string[] = ['#f06292', '#a5d6a7', '#ffab91', '#80deea', '#ff8a80', '#ce93d8'];
  selectedColor: string = '';

  constructor(public dialogRef: MatDialogRef<NewFolderDialogComponent>) {}

  selectColor(color: string) {
    this.selectedColor = color;
  }

  addColor() {
    // Logique pour ajouter une nouvelle couleur
  }

  createFolder() {
    // Logique pour créer un nouveau dossier
    this.dialogRef.close({name: this.folderName, color: this.selectedColor});
  }
}
