/// <reference types="cypress" />



describe('Teste de Funcionalidade Produtos', function () {

    let token
    beforeEach(() => {
        cy.token('raphael.lima@qa.com.br', 'teste').then(tkn => { token = tkn })
    })

    it('Listar produtos', function () {
        cy.request({
            method: 'GET',
            url: 'produtos'
        }).then(function (response) {
            expect(response.status).to.equal(200);
            expect(response.body).to.have.property('produtos');
            expect(response.duration).to.be.lessThan(100);
        })
    })

    it('Cadastrar produto', function () {
        let produto = `Produto EBAC ${Math.floor(Math.random() * 100000000)}`
        cy.cadastrarProdutos(token, produto, 250, "teste EBAC", 250).then(function (response) {
            expect(response.status).to.equal(201);
            expect(response.body.message).to.equal("Cadastro realizado com sucesso");
        })
    })

    it('Validar mensagem de produto repitido', function () {
        cy.cadastrarProdutos(token, 'Produto EBAC 92889538', 250, "teste EBAC", 180).then(function (response) {
            expect(response.status).to.equal(400);
            expect(response.body.message).to.equal("Já existe produto com esse nome");
        })
    })
})