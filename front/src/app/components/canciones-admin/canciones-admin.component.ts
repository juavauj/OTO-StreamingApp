import { Component, OnInit } from '@angular/core';

import { Cancion } from '../../modelo/cancion';
import { Artista } from '../../modelo/artista';
import { Album } from '../../modelo/album';

import { CancionService } from '../../services/cancion.service';
import { ArtistaService } from '../../services/artista.service';
import { AlbumesService } from '../../services/albumes.service';

@Component({
  selector: 'app-canciones-admin',
  templateUrl: './canciones-admin.component.html',
  styleUrls: ['./canciones-admin.component.scss']
})
export class CancionesAdminComponent implements OnInit {

	public canciones: Cancion[];
	public artistas: Artista[];
	public albumes: Album[];
	public track: Cancion;
	public trackEditar: Cancion;

	constructor(
		private cancionesService: CancionService,
		private artistaService: ArtistaService,
		private albumesService: AlbumesService
		) {
		//this.canciones= new Cancion('','',0,'','','','');
		this.track = new Cancion('', '', '', '', 0 , '', '');
		this.trackEditar = undefined;
	 }
	filterPost = '';
   
  
	ngOnInit(): void {
		this.obtenerCanciones(),
		this.obtenerArtistas(),
		this.obtenerAlbumes()
	}
  
	obtenerCanciones(){
		this.cancionesService.obtenerCanciones().subscribe(
			(response: any)=>{
				this.canciones=response.cancion;
				console.log(this.canciones)
				//console.log(this.canciones[0])
				if(!this.canciones){
					console.log('No hay canciones en la BD');
				} 
			},
			(error) =>{
				let errorMsg = <any>error;
				if(errorMsg != null){
					console.log(errorMsg);
				}
			}
		);
	}

	obtenerArtistas(){
		this.artistaService.getArtistas().subscribe(
			(response: any)=>{
				this.artistas=response.artista;
					console.log(this.artistas);
				//console.log(this.artistas[0])
				if(!this.artistas){
					console.log('No hay artistas en la BD');
				} 
			},
			(error) =>{
				let errorMsg = <any>error;
				if(errorMsg != null){
					console.log(errorMsg);
				}
			}
		);
	}

	obtenerAlbumes(){
		this.albumesService.getAlbumes().subscribe(
			(response: any)=>{
				this.albumes=response.album;
					console.log(this.albumes);
				//console.log(this.albumes[0])
				if(!this.albumes){
					console.log('No hay albumes en la BD');
				} 
			},
			(error) =>{
				let errorMsg = <any>error;
				if(errorMsg != null){
					console.log(errorMsg);
				}
			}
		);
	}

	deleteCancion(cancion){
		this.cancionesService.borrarCancion(cancion._id).subscribe(
			(response: any)=>{
				let cancionBorrada = response.cancion;
				console.log(cancionBorrada);
				//console.log(this.canciones[0])
				if(!cancionBorrada){
					alert('No se ha podido eliminar la cancion');
				} else {
					alert('cancion eliminada correctamente');
					this.obtenerCanciones();
				}
			},
			(error) =>{
				let errorMsg = <any>error;
				if(errorMsg != null){
					alert('cancion eliminada correctamente');
				}
			}
		);
	}

	mutearCancion(cancion) {
		if (cancion.estado === 'activo') {
			cancion.estado = 'inactivo';
		  } else if (cancion.estado === 'inactivo') {
			cancion.estado = 'activo'
		  }
		this.cancionesService.actualizarCanciones(cancion._id, cancion).subscribe(
			(response: any)=>{
				let cancionEditada = response.cancion;
				console.log(cancionEditada);
				//console.log(this.canciones[0])
				if(!cancionEditada){
					alert('No se ha podido cambiar el estado');
				} else {
					alert('Estado actualizado correctamente');
					this.obtenerCanciones();
				}
			},
			(error) =>{
				let errorMsg = <any>error;
				if(errorMsg != null){
					alert(errorMsg);
				}
			}
		);
	}


	addCancion(){
		this.cancionesService.agregarCancion(this.track)
      .subscribe(
        (response: any) => {
          this.track = response.cancion;
          if (!this.track._id) {
            alert(`${this.track.nombre} no se ha podido registrar!`);
          } else {
            alert(`cancion ${this.track.nombre} registrado!`);
            // rellenar con cancions actualizados (sin imagen)
            this.obtenerCanciones();
            // ahora se procede a cargar la imagen (de haber una)
            /* if (!this.nuevaImagen) {
              alert(`No has seleccionado una imagen para ${this.track.nombre}`);
            } else {
              alert(`La imagen seleccionada es ${this.nuevaImagen.name}`);
              // utilizar el servicio de carga de imagen
              this.cancionService.subirImg(this.track._id, this.nuevaImagen)
                .subscribe(
                  (result: any) => {
                    // tener en cuenta que aca no se revisan errores
                    // rellenar con cancions actualizados (con imagen)
                    this.getcancions();
                  }
                );
              // limpiar para nueva imagen
              this.nuevaImagen = undefined;
            } */
            // limpiar para un nuevo cancion
            this.track = new Cancion('', '', '', '', 0 , '', '');
          }
        },
        error => {
          let errorMensaje = <any>error;
          if (errorMensaje != null) {
			alert(`${this.track.nombre} no se ha podido anadir!`);
			console.log(errorMensaje);
          }
        }
      );
	}

	setTrackEditar(cancion){
		this.trackEditar = cancion;
		console.log(this.trackEditar);
	}

}