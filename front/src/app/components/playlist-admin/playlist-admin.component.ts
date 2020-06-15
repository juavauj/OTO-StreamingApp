import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playlist-admin',
  templateUrl: './playlist-admin.component.html',
  styleUrls: ['./playlist-admin.component.scss']
})
export class PlaylistAdminComponent implements OnInit {

  constructor() { }

  filterPost = '';
  posts = [
    {
      "nombre": "playlist xyz",
      "usuario": {
        "idUsuario": "lasd2232321kdkf",
        "nick": "ppgrillo"
      },
      "canciones": [
      { 
        "idCancion": "123asdfaasdffa",
        "nombre": "cancion xyz"
      },
      { 
        "idCancion": "123asdfaasdffa",
        "nombre": "cancion 123"
      },
      { 
        "idCancion": "123asdfaasdffa",
        "nombre": "cancion aaa"
      },
      { 
        "idCancion": "123asdfaasdffa",
        "nombre": "cancion mmm"
      },
      ],
      "estado": "activo"
    }
]
  
  ngOnInit(): void {
  }

}
