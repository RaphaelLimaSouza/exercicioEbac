/// <reference types="cypress" />

describe('Login - Teste da API ServRest', function () {

    it('Deve fazer login com sucesso', function () {
        cy.request({
            method: 'POST',
            url: 'login',
            body:
            {
                "email": "raphael.lima@qa.com.br",
                "password": "teste"
            }
        }).then(function (response) {
            expect(response.status).to.equal(200);
            expect(response.body.message).to.equal("Login realizado com sucesso");
            cy.log(response.body.authorization)
        })
    })
})