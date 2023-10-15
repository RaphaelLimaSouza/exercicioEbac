class metodoPagamentoPage {

    metodoPagamento() {
        cy.clicar("#payment_method_cod");
        cy.clicar("#terms");
        cy.clicar("#place_order");
    }
}

export default new metodoPagamentoPage();