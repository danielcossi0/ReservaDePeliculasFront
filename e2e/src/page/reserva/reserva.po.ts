import { browser, by, element } from 'protractor';

export class ReservaPage {

    private inputCedulaDeCliente = element(by.id('cedulaCliente'));
    private inputnombreDeLaPelicula = element(by.id('nombreDeLaPelicula'));
    private inputDiasDeReserva = element(by.id('diasDeReserva'));
    private botonReservar = element(by.id('botonReservar'));

    private listaReservas = element.all(by.css('app-listar-reserva table.tbody.tr'));




    async irAListarReservas(): Promise<number> {
        return browser.get(browser.baseUrl + '/reservas/listar');
    }
    
    async irACrearReserva(): Promise<number> {
        return browser.get(browser.baseUrl + '/reservas/crear');
    }
    
    async irABorrarReserva(): Promise<number> {
        return browser.get(browser.baseUrl + '/reservas/borrar');
    }
    
    async irAFiltrarPorCedulaReserva(): Promise<number> {
        return browser.get(browser.baseUrl + '/reservas/listar-por-cedula');
    }
    
    async ingresarCedulaDeCliente(cedulaDeCliente){
        await this.inputCedulaDeCliente.sendKeys(cedulaDeCliente);
    }
    async ingresarNombreDeLaPelicula(nombreDeLaPelicula){
        await this.inputnombreDeLaPelicula.sendKeys(nombreDeLaPelicula);
    }
    async ingresarDiasDeReserva(diasDeReserva){
        await this.inputDiasDeReserva.sendKeys(diasDeReserva);
    }

    async clickBotonReservar(){
        await this.botonReservar.click();
    }
    


    async contarReservas() {
        return this.listaReservas.count();
    }
}
