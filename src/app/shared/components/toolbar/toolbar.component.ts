import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  public NgBlog = 'NgBlog'
  constructor(public authService: AuthService) { }

  ngOnInit() {
  }
  onLogout():void{
    this.authService.logout()
  }
}
