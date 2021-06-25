import { Component, ViewChild } from '@angular/core';
import { Todo } from './model/todo.model';
import { TodoService } from './services/todo.service';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { FormControl } from '@angular/forms';
import { DialogEditTodoComponent } from './dialog-edit-todo/dialog-edit-todo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'prueba-smarttec';
  dataSource;
  displayedColumns: string[] = ['completed', 'id', 'title', 'actions'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  titleControl: FormControl;

  constructor(private todoService: TodoService, public dialog: MatDialog) { }

  ngOnInit() {
    this.titleControl = new FormControl();

    this.todoService.getTodo().subscribe((todos: Todo[]) => {

      this.dataSource = new MatTableDataSource<Todo>(todos);
      this.dataSource.paginator = this.paginator;

    });

  }

  create() {
    this.todoService.create(this.titleControl.value).subscribe((todo: Todo) => {
      alert("Se ha agregado correctamente")
      this.titleControl.reset();
    })
  }

  updateComplete(id: number, e: any) {
    this.todoService.update(id, { completed: e.checked }).subscribe((x: any) => {
      alert("Se ha actualizado correctamente");
    })
  }

  updateTitle(id: number) {

    this.openDialog((resp: any) => {

      if (!resp) return

      this.todoService.update(id, { title: resp }).subscribe((x: any) => {
        alert("Se ha actualizado correctamente");
      })
    });
  }

  delete(id: number) {
    this.todoService.delete(5).subscribe((x: any) => {
      alert("Se ha eliminado corretamente");
    })
  }

  openDialog(resolve): void {
    const dialogRef = this.dialog.open(DialogEditTodoComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(resolve);
  }

}
