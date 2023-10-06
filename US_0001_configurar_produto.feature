            #language: pt

            Funcionalidade: Configuração do Produto
            Como cliente da EBAC-SHOP
            Quero configurar meu produto de acordo com meu tamanho e gosto
            E escolher a quantidade
            Para depois inserir no carrinho

            Contexto:
            Dado que estou na página do produto

            Cenário: Seleções de cor, tamanho e quantidade
            Quando eu seleciono uma cor, tamanho e quantidade para o produto
            Então a seleção deve ser bem-sucedida

            Cenário: Não Seleções de cor, tamanho e quantidade
            Quando tento adicionar um produto ao carrinho sem selecionar cor, tamanho e quantidade
            Então o sistema deve exibir uma mensagem de erro

            Esquema do Cenário: Limite de produtos por venda
            Quando eu tento adicionar <quantidade> produtos ao carrinho
            Então o sistema deve permitir apenas até 10 produtos

            Exemplos:
            | quantidade |
            | 5          |
            | 10         |
            | 15         |

            Cenário: Limpar seleções
            Dado que eu fiz algumas seleções de produto
            Quando eu clico no botão "limpar"
            Então todas as minhas seleções devem ser desfeitas e o estado deve voltar ao original

            
