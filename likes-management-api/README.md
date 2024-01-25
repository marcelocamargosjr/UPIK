# Likes Management API

## Descrição
Este é o repositório da API de Gerenciamento de Likes, uma aplicação Node.js para gerenciar likes em diversas plataformas.

## Versão
1.0.0

## Repositório
[https://github.com/marcelocamargosjr/UPIK.git](https://github.com/marcelocamargosjr/UPIK.git)

## Requisitos
- Node.js
- npm (gerenciador de pacotes do Node.js)

## Instalação
Clone o repositório e instale as dependências:
```
git clone https://github.com/marcelocamargosjr/UPIK.git
cd likes-management-api
npm install
```

## Estrutura do Projeto
A aplicação está estruturada da seguinte forma:
- `app.ts`: Arquivo principal da aplicação.
- `controllers`: Diretório para controladores.
- `middlewares`: Diretório para middlewares.
- `models`: Diretório para modelos.
- `routes`: Diretório para rotas.
- `types`: Diretório para tipos personalizados.

## Scripts Disponíveis
No diretório do projeto, você pode executar:

### `npm start`
Executa a aplicação em modo de desenvolvimento.
Abra [http://localhost:3000](http://localhost:3000) para visualizá-la no navegador.

### `npm test`
Executa os testes definidos.

### `npm run build`
Compila a aplicação para produção na pasta `build`.

## Testando as APIs
Você pode testar as APIs usando os seguintes comandos cURL:

### Obter Likes
```
curl --location 'http://localhost:3000/likes/1' \
--header 'accept: application/json' \
--header 'Authorization: Bearer {token gerado em jwt.io}'
```

### Postar Like
```
curl --location --request POST 'http://localhost:3000/likes/1' \
--header 'accept: application/json' \
--header 'Authorization: Bearer {token gerado em jwt.io}'
```

Para gerar o token JWT, utilize o site https://jwt.io/ com o segredo "upikrules".

## Dependências
- express: ^4.18.2

## Dependências de Desenvolvimento
- @types/express: ^4.17.21
- @types/jest: ^29.5.11
- @types/jsonwebtoken: ^9.0.5
- jest: ^29.7.0
- jsonwebtoken: ^9.0.2
- ts-jest: ^29.1.2
- ts-node: ^10.9.2
- typescript: ^4.9.5
