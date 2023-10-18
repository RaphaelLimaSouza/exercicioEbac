/// <reference types="cypress" />

import contrato from '../contracts/produtos.contracts'

describe('Teste de Funcionalidade Produtos', function () {

    let token
    beforeEach(() => {
        cy.token('raphael.lima@qa.com.br', 'teste').then(tkn => { token = tkn })
    })

    it('Deve validar contrato produtos', function () {
        cy.request('produtos').then(response => {
            return contrato.validateAsync(response.body)
        })
    })

    it('GET - Listar produtos', function () {
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

    it('GET + PUT - Editar produto cadastrado', function () {
        let produto = `Produto EBAC ${Math.floor(Math.random() * 100000000)}`
        cy.request({
            method: 'GET',
            url: 'produtos'
        }).then(function (response) {
            cy.log(response.body.produtos[0]._id);
            let id = response.body.produtos[0]._id;
            cy.request({
                method: 'PUT',
                url: `produtos/${id}`,
                headers: { authorization: token },
                body:
                {
                    "nome": produto,
                    "preco": 370,
                    "descricao": "Produto Editado",
                    "quantidade": 500
                }
            }).then(function (response) {
                expect(response.body.message).to.equal('Registro alterado com sucesso');
            })
            expect(response.status).to.equal(200);
            expect(response.body).to.have.property('produtos');
            expect(response.duration).to.be.lessThan(100);
        })
    })

    it('PUT - Deve editar o produto cadastrado previamente', function () {
        let produto = `Produto EBAC ${Math.floor(Math.random() * 100000000)}`
        cy.cadastrarProdutos(token, produto, 250, "teste EBAC", 250).then(function (response) {
            expect(response.status).to.equal(201);
            expect(response.body.message).to.equal("Cadastro realizado com sucesso");
            let id = response.body._id;
            cy.request({
                method: 'PUT',
                url: `produtos/${id}`,
                headers: { authorization: token },
                body:
                {
                    "nome": produto + " editado",
                    "preco": 200,
                    "descricao": "Produto Editado",
                    "quantidade": 200
                }
            }).then(function (response) {
                expect(response.body.message).to.equal('Registro alterado com sucesso');
            })
            expect(response.status).to.equal(201);
            expect(response.duration).to.be.lessThan(100);
        })
    })

    it('DELETE - Deve deletar o produto cadastrado previamente', function () {
        let produto = `Produto EBAC ${Math.floor(Math.random() * 100000000)}`
        cy.cadastrarProdutos(token, produto, 250, "teste EBAC", 250).then(function (response) {
            expect(response.status).to.equal(201);
            expect(response.body.message).to.equal("Cadastro realizado com sucesso");
            let id = response.body._id;
            cy.request({
                method: 'DELETE',
                url: `produtos/${id}`,
                headers: { authorization: token }
            }).then(function (response) {
                expect(response.body.message).to.equal('Registro excluído com sucesso');
            })
            expect(response.status).to.equal(201);
            expect(response.duration).to.be.lessThan(100);
        })
    })

})