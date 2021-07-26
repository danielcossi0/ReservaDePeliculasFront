export class Reserva {
    idReserva: number;
    cedulaCliente: string;
    nombreDeLaPelicula: string;
    fechaDeReserva: Date;
    diasDeReserva: number;
    fechaDeEntrega: Date;
    precioCalculado: number;


    constructor(idReserva: number,
        cedulaCliente: string,
        nombreDeLaPelicula: string,
        fechaDeReserva: Date,
        diasDeReserva: number,
        fechaDeEntrega: Date,
        precioCalculado: number
    ) {

        this.idReserva = idReserva;
        this.cedulaCliente = cedulaCliente;
        this.nombreDeLaPelicula = nombreDeLaPelicula;
        this.fechaDeReserva = fechaDeReserva;
        this.diasDeReserva = diasDeReserva;
        this.fechaDeEntrega = fechaDeEntrega;
        this.precioCalculado = precioCalculado;
    }
}
