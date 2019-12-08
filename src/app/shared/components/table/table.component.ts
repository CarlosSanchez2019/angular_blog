import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatSort, MatDialog } from '@angular/material';
import { PostService } from 'src/app/components/posts/post.service';
import { PostI } from 'src/app/components/shared/models/post.interface';
import Swal from 'sweetalert2'
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['titlePost', 'tagsPost', 'actions'];
  dataSource = new MatTableDataSource();
  
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator
  @ViewChild(MatSort, {static: true}) sort: MatSort
  
  constructor(private postService: PostService, public dialog: MatDialog) { }
  
  ngOnInit() {
    this.postService.getAllPost()
      .subscribe(post => this.dataSource.data = post)
  }
  
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onDeletePost(post: PostI){
    Swal.fire({
      title: 'Quieres eliminar este Post?',
      text: "Luego no se puede volver a atrás",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminalo!',
      cancelButtonText: 'No, cancelar!',
    }).then((result) => {
      if (result.value) {
        this.postService.deletePostById(post)
          .then(()=>{
            Swal.fire(
              'Eliminado!',
              'Post Eliminado con éxito',
              'success'
            )
          }).catch(err => {
            Swal.fire(
              'Erro!',
              `Algo salió mal ${err}`,
              'error'
            )
          })
      }
    })
  }

  onEditPost(post: PostI){
    console.log('Edit Post', post)

  }

  onNewPost(){
    console.log('New Post')
    this.openDialog()

  }
  openDialog(){
    const dialogRef = this.dialog.open(ModalComponent)
    dialogRef.afterClosed()
      .subscribe(res => console.log(`Dialog result ${res}`))
  }

}
