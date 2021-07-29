import { ReservaPage } from './../page/reserva/reserva.po';
import { NavbarPage } from '../page/navbar/navbar.po';
import { AppPage } from '../app.po';

describe('workspace-project Producto', () => {
    let page: AppPage;
    let navBar: NavbarPage;
    let reserva: ReservaPage;

    beforeEach(() => {
        page = new AppPage();
        navBar = new NavbarPage();
        reserva = new ReservaPage();
    });

    it('Deberia listar las reservas', () => {
        page.navigateTo();
        navBar.clickBotonListar();

        expect(reserva.contarReservas()).toBeGreaterThanOrEqual(0)
    });
});
