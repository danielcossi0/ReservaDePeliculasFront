import { by, element } from 'protractor';

export class NavbarPage {
 
    linkListarTodo = element(by.xpath('/html/body/app-root/app-navbar/nav/a[1]'));
    linkCrear = element(by.xpath('/html/body/app-root/app-navbar/nav/a[2]'));
    linkEliminar = element(by.xpath('/html/body/app-root/app-navbar/nav/a[3]'));
    linkFiltrar = element(by.xpath('/html/body/app-root/app-navbar/nav/a[4]'));


    async clickBotonListar() {
        await this.linkCrear.click();
    }
    async clickBotonCrear() {
        await this.linkCrear.click();
    }
    async clickBotonEliminar() {
        await this.linkEliminar.click();
    }
    async clickBotonFiltrar() {
        await this.linkFiltrar.click();
    }
}
