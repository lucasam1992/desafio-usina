# Biblioteca de Filmes com Recomendações e Avaliações

- A ideia do projeto é auxiliar pessoas que estão a procura por recomendações de filmes. Dando condições a todos para acrescentar sugestões. 

## Instruções para Configuração

1. Após clonar a Branch, acesse o diretório back end e crie um arquivo chamado .env
 * O .env deve conter as seguintes propriedades:
-   *  API_PORT=3001
-   *  POSTGRE_USERNAME=
-   *  POSTGRE_PASSWORD=
-   *  POSTGRE_HOST=127.0.0.1
-   *  POSTGRE_DATABASE=library_films
-   *  POSTGRE_PORT=5432
-   *  POSTGRE_DIALECT=postgres


2. Rode ao mesmo tempo back end e front end:
 * Acesse a pasta back end e insira no terminal o comando `npm run dev`.
 * No diretório front end, digite no terminal o comando `npm start` 

3. Após os comandos acima, acesse `localhost:3001` no seu navegador e teste as funcionalidades da aplicação.