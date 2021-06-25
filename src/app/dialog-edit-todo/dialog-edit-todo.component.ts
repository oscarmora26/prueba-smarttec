import { Component, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'dialog-edit-todo',
    templateUrl: 'dialog-edit-todo.component.html',
})
export class DialogEditTodoComponent {

    titleControl: FormControl
    constructor( public dialogRef: MatDialogRef<DialogEditTodoComponent> ) {
        this.titleControl = new FormControl();
     }

    onNoClick(): void {
        this.dialogRef.close();
    }

}