import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artistas-admin',
  templateUrl: './artistas-admin.component.html',
  styleUrls: ['./artistas-admin.component.scss']
})
export class ArtistasAdminComponent implements OnInit {

  filterPost = '';

  posts;

  constructor() { }

  ngOnInit(): void {
  }

  delete(post){
  }

}
