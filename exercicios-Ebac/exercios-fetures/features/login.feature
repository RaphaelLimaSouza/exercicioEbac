            #language: pt

            Funcionalidade: Tela de login

            Como aluno do portal EBAC
            quero me autenticar
            Para visualizar minhas notas

            Contexto:
            Dado que eu acesse a página de autenticação do portal EBAC

            Cenário: Autenticação válida
            Quando eu digitar o usuário "joão@ebac.com.br"
            E a senha "senha@123"
            Então devo exibir uma mensagem de boas vindas "Ola João"

            Cenário: Usuario inexistente
            Quando eu digitar o usuário "xxyyzz@ebac.com.br"
            E a senha "senha@123"
            Então devo exibir uma mensagem de alerta "usuario inexistente"

            Cenário: Usuario com senha invalida
            Quando eu digitar o usuário "joão@ebac.com.br"
            E a senha "xxxxxxx"
            Então devo exibir uma mensagem de alerta "Usuario ou senha invalida"

            Esquema do Cenário: Autenticar Multiplos usuários
            Quando eu digitar o <usuario>
            E a <senha>
            Então devo exibir uma <mensagem> de sucesso

            Exemplos:
            | usuario             | senha       | mensagem    |
            | "joão@ebac.com.br"  | "senha@123" | "Ola João"  |
            | "maria@ebac.com.br" | "senha@123" | "Ola Maria" |
            | "jose@ebac.com.br"  | "senha@123" | "Ola José"  |