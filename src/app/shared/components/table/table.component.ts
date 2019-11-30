import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatSort } from '@angular/material';
import { PostService } from 'src/app/components/posts/post.service';
import { PostI } from 'src/app/components/shared/models/post.interface';


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
  
  constructor(private postService: PostService) { }
  
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
    console.log('Delete Post', post)
  }

  onEditPost(post: PostI){
    console.log('Edit Post', post)
  }

  onNewPost(){
    console.log('New Post')
  }

}
