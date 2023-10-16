            #language: pt

            Funcionalidade: Calculadora
            Como não sei fazer conta de cabeça
            Quero usar calculadora do sistema
            Para somar dois números

            Contexto:
            Dado que eu acesse a calculadora

            Cenário: Soma de 2 numeros
            Quando eu somar 2 + 2
            Então o resultado deve ser 4

            Esquema do Cenário: Soma de 2 numeros
            Quando eu soma <num_1> com o <num_2>
            Então o resultado deve ser <resultado>

            Exemplos:
            | num_1 | num_2 | resultado |
            | 2     | 4     | 6         |
            | 1     | 1     | 2         |
            | 2     | 2     | 4         |
            | 3     | 3     | 6         |
            | 4     | 4     | 8         |
            | 5     | 5     | 10        |
            | 6     | 6     | 12        |
            | 7     | 7     | 14        |
            | 8     | 8     | 16        |
            | 9     | 9     | 18        |
            | 10    | 10    | 20        |
            | 10    | 1     | 11        |
            | 20    | 20    | 40        |
            | 30    | 30    | 60        |
            | 40    | 40    | 80        |
            | 50    | 50    | 100       |
            | 60    | 60    | 120       |
            | 70    | 70    | 140       |
            | 80    | 80    | 160       |
            | 90    | 90    | 180       |
            | 100   | 100   | 200       |