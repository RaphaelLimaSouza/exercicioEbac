            #language: pt
            Funcionalidade: Conclusão do Cadastro
            Como cliente da EBAC-SHOP
            Quero concluir meu cadastro
            Para finalizar minha compra

            Contexto:
            Dado que estou na página de cadastro

            Esquema do Cenário: Cadastro com dados obrigatórios
            Quando preencho todos os campos obrigatórios marcados com asteriscos
            E os campos são: <nome>, <sobrenome>, <endereco>, <pais>, <cidade>, <CEP>, <telefone> e <email>
            E clico no botão "Cadastrar"
            Então o cadastro deve ser realizado com sucesso


            Cenário: Cadastro com e-mail inválido
            Quando preencho o campo e-mail <email_invalido> com um formato inválido
            E clico no botão Cadastrar
            Então o sistema deve exibir uma mensagem de erro

            Cenário: Cadastro com campos vazios
            Quando tento cadastrar com campos vazios
            Então o sistema deve exibir uma mensagem de alerta

            Exemplos:
            | nome | sobrenome | endereco | pais   | cidade | CEP      | telefone    | email          | email_invalido |
            | João | Silva     | Rua A    | brasil | Rio    | 20040040 | 21986595689 | joao@email.com | teste.teste    |


