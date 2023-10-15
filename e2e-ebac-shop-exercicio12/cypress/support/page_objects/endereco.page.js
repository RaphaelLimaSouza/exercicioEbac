class enderecoPage {

  enderecoFaturamento(
    nome,
    sobrenome,
    empresa,
    pais,
    endereco,
    numero,
    cidade,
    estado,
    cep,
    telefone,
    email
  ) {
    cy.preencherCampo("#billing_first_name", nome);
    cy.preencherCampo("#billing_last_name", sobrenome);
    cy.preencherCampo("#billing_company", empresa);
    cy.get("#select2-billing_country-container").click().type(pais + "{enter}");
    cy.preencherCampo("#billing_address_1", endereco);
    cy.preencherCampo("#billing_address_2", numero);
    cy.preencherCampo("#billing_city", cidade);
    cy.get("#select2-billing_state-container").click().type(estado + "{enter}");
    cy.preencherCampo("#billing_postcode", cep);
    cy.preencherCampo("#billing_phone", telefone);
    cy.preencherCampo("#billing_email", email);
  }
}

export default new enderecoPage();