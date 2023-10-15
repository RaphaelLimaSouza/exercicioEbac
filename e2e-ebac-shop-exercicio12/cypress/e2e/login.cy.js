let dadosLogin;
context("Funcionalidade Login", () => {
  before(() => {
    cy.fixture("perfil").then((perfil) => {
      dadosLogin = perfil;
    });
  });

  beforeEach(() => {
    cy.visit("minha-conta");
  });

  afterEach(() => {
    cy.screenshot();
  });

  it("Login com sucesso usando Comando customizado", () => {
    cy.login(dadosLogin.usuario, dadosLogin.senha);
    cy.verificarContemTexto(".page-title", "Minha conta");
  });

  it("Login usando fixture", () => {
    cy.fixture("perfil").then((dados) => {
      cy.login(dados.usuario, dados.senha);
    });
    cy.verificarContemTexto(".page-title", "Minha conta");
  });

  it("Fazer login com sucesso", () => {
    cy.preencherCampo("#username", dadosLogin.usuario);
    cy.preencherCampo("#password", dadosLogin.senha, { log: false });
    cy.clicar(".woocommerce-form > .button");
    cy.verificarContemTexto(".page-title", "Minha conta");
    cy.verificarContemTexto(".woocommerce-MyAccount-content > :nth-child(2)", "Olá, aluno_ebac");
  });
});
