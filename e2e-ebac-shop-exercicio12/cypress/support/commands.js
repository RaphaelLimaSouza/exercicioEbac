// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//LOGIN
Cypress.Commands.add('login', (usuario, senha) => {
    cy.preencherCampo('#username', usuario);
    cy.preencherCampo('#password', senha);
    cy.clicar('.woocommerce-form > .button');
});

//ADICIONARPRODUTOS
Cypress.Commands.add('adicionarProduto', (nomeProduto, quantidade) => {
    cy.clicarContem('.product-block', nomeProduto);
    cy.clicar('.button-variable-item-S');
    cy.clicar('.button-variable-item-Blue');
    cy.preencherCampo('.input-text', quantidade);
    cy.clicar('.single_add_to_cart_button');
    cy.verificarContemTexto('.dropdown-toggle > .mini-cart-items', quantidade);
    cy.get('.woocommerce-message').should('contain', quantidade + ' × “Abominable Hoodie” foram adicionados no seu carrinho.')
    cy.clicar(".woocommerce-message > .button");
    cy.wait(500);
    cy.clicar(".checkout-button");
});

//CLICAR
Cypress.Commands.add('clicar', (elemento) => {
    cy.get(elemento)
        .should('be.visible')
        .click({ force: true }).wait(200)
        .then(() => {
            if (Cypress.$('.mensagem-de-erro').length > 0) {
                throw new Error('Erro após o clique: Mensagem de erro encontrada na tela.');
            }
        });
});

Cypress.Commands.add('clicarContem', (elemento, nomeesperado) => {
    cy.get(elemento).contains(nomeesperado)
        .should('be.visible')
        .click({ force: true }).wait(200)
        .then(() => {
            if (Cypress.$('.mensagem-de-erro').length > 0) {
                throw new Error('Erro após o clique: Mensagem de erro encontrada na tela.');
            }
        });
});

//ESCREVER
Cypress.Commands.add('preencherCampo', (elemento, texto) => {
    cy.get(elemento)
        .should('be.visible')
        .clear()
        .type(texto);
});

//CONTEM
Cypress.Commands.add('verificarContemTexto', (seletor, texto) => {
    cy.get(seletor).should('contain', texto);
});

