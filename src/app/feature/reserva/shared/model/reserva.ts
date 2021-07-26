export class Reserva {
    idReserva: number;
    cedulaCliente: string;
    nombreDeLaPelicula: string;
    fechaDeReserva: Date;
    diasDeReserva: number;
    fechaDeEntrega: Date;
    precioCalculado: number;
    estado: string;


    constructor(idReserva: number,
        cedulaCliente: string,
        nombreDeLaPelicula: string,
        fechaDeReserva: Date,
        diasDeReserva: number,
        fechaDeEntrega: Date,
        precioCalculado: number,
        estado: string
    ) {

        this.idReserva = idReserva;
        this.cedulaCliente = cedulaCliente;
        this.nombreDeLaPelicula = nombreDeLaPelicula;
        this.fechaDeReserva = fechaDeReserva;
        this.diasDeReserva = diasDeReserva;
        this.fechaDeEntrega = fechaDeEntrega;
        this.precioCalculado = precioCalculado;
        this.estado = estado;
    }
}
