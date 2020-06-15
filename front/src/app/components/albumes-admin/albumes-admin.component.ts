import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-albumes-admin',
  templateUrl: './albumes-admin.component.html',
  styleUrls: ['./albumes-admin.component.scss']
})
export class AlbumesAdminComponent implements OnInit {

  constructor() { }
  filterPost = '';

  posts = [
    {
      'id': "dknsakdjnaskjdnkjsa12",
      "nombre": "cancion 1",
      "artista": {
        "idArtista": "asdfasdf",
        "nombre": "artista 1"
      },
      "genero": "salsa",
      "imagen": "cancion.png",
      "disquera": "warner music",
      "anio": 2000,
      "estado": "activo"
    }
    
    
  ]

  ngOnInit(): void {
  }

}

