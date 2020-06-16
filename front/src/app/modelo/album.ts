export class Album {
    constructor(
      public _id: String,
      public titulo: String,
      public artistas: String[],
      public canciones: String[],
      public generos: String[],
      public disquera: String,
      public anio: number,
      public imagen: string,
      public estado: string 
    ) {}
  }
  