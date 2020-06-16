import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-canciones-admin',
  templateUrl: './canciones-admin.component.html',
  styleUrls: ['./canciones-admin.component.scss']
})
export class CancionesAdminComponent implements OnInit {

  constructor() { }
  filterPost = '';
  posts = [
    {
	"_id" : "5ee4f431353659edc6d7bfee",
	"nombre" : "Shine On You Crazy Diamond (Pts. 1-5)",
	"album" : {
		"idAlbum" : "5ee4f42f353659edc6d7bfe4",
		"nombre" : "Wish You Were Here"
	},
	"artista" : {
		"idArtista" : "5ee4f428353659edc6d7bfd6",
		"nombre" : "Pink Floyd"
	},
	"duracion" : 811,
	"estado" : "activo",
	"archivoAudio" : "5ee4f431353659edc6d7bfee.mp3"
},
{
	"_id" : "5ee4f431353659edc6d7bfef",
	"nombre" : "Welcome to the Machine",
	"album" : {
		"idAlbum" : "5ee4f42f353659edc6d7bfe4",
		"nombre" : "Wish You Were Here"
	},
	"artista" : {
		"idArtista" : "5ee4f428353659edc6d7bfd6",
		"nombre" : "Pink Floyd"
	},
	"duracion" : 451,
	"estado" : "activo",
	"archivoAudio" : "5ee4f431353659edc6d7bfef.mp3"
},
{
	"_id" : "5ee4f432353659edc6d7bff0",
	"nombre" : "Have a Cigar",
	"album" : {
		"idAlbum" : "5ee4f42f353659edc6d7bfe4",
		"nombre" : "Wish You Were Here"
	},
	"artista" : {
		"idArtista" : "5ee4f428353659edc6d7bfd6",
		"nombre" : "Pink Floyd"
	},
	"duracion" : 307,
	"estado" : "activo",
	"archivoAudio" : "5ee4f432353659edc6d7bff0.mp3"
},
{
	"_id" : "5ee4f432353659edc6d7bff1",
	"nombre" : "Wish You Were Here",
	"album" : {
		"idAlbum" : "5ee4f42f353659edc6d7bfe4",
		"nombre" : "Wish You Were Here"
	},
	"artista" : {
		"idArtista" : "5ee4f428353659edc6d7bfd6",
		"nombre" : "Pink Floyd"
	},
	"duracion" : 334,
	"estado" : "activo",
	"archivoAudio" : "5ee4f432353659edc6d7bff1.mp3"
},
{
	"_id" : "5ee4f432353659edc6d7bff2",
	"nombre" : "Shine On You Crazy Diamond (Pts. 6-9)",
	"album" : {
		"idAlbum" : "5ee4f42f353659edc6d7bfe4",
		"nombre" : "Wish You Were Here"
	},
	"artista" : {
		"idArtista" : "5ee4f428353659edc6d7bfd6",
		"nombre" : "Pink Floyd"
	},
	"duracion" : 747,
	"estado" : "activo",
	"archivoAudio" : "5ee4f432353659edc6d7bff2.mp3"
},

]

  ngOnInit(): void {
  }

}
