import { Component, OnInit } from '@angular/core';

import { Cancion } from '../../modelo/cancion';

import { CancionService } from '../../services/cancion.service'

@Component({
  selector: 'app-canciones-admin',
  templateUrl: './canciones-admin.component.html',
  styleUrls: ['./canciones-admin.component.scss']
})
export class CancionesAdminComponent implements OnInit {

	public canciones: Cancion[];

	constructor(private cancionesService: CancionService) {
		//this.canciones= new Cancion('','',0,'','','','');
	 }
	filterPost = '';
   
  
	ngOnInit(): void {
		this.obtenerCanciones()
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

}
