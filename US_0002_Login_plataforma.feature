            #language: pt

            Funcionalidade: Login na Plataforma
            Como cliente da EBAC-SHOP
            Quero fazer o login na plataforma
            Para visualizar meus pedidos

            Contexto:
            Dado que estou na página de login

            Esquema do Cenário: Login com dados válidos
            Quando insiro dados válidos nos campos de <usuario> e <senha>
            E clico no botão Login
            Então devo ser direcionado para a tela de checkout

            Esquema do Cenário: Login com dados inválidos
            Quando insiro dados inválidos em um dos campos de <usuarioinvalido> e <senha>
            E clico no botão Login
            Então o sistema deve exibir uma mensagem de alerta Usuário ou senha inválidos

            Exemplos:
            | usuario                | senha | usuarioinvalido          |
            | login_valido@teste.com | 1234  | login_Invalido@teste.com |
