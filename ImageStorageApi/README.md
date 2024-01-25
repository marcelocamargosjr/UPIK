# Image Storage API

## Descrição
Este é o repositório da API de Armazenamento de Imagens, uma aplicação .NET Core para gerenciar o armazenamento e recuperação de imagens.

## Repositório
[https://github.com/marcelocamargosjr/UPIK.git](https://github.com/marcelocamargosjr/UPIK.git)

## Estrutura do Projeto
A aplicação está estruturada da seguinte forma:
- `Controllers`: Diretório para controladores.
- `Dtos`: Diretório para Data Transfer Objects.
- `Middlewares`: Diretório para middlewares.
- `Models`: Diretório para modelos.
- `Profiles`: Diretório para perfis de mapeamento de objetos.
- `Repositories`: Diretório para repositórios.
- `Services`: Diretório para serviços.
- `Program.cs`: Arquivo principal da aplicação.
- `appsettings.json`: Arquivo de configuração.

## Requisitos
- .NET Core SDK na versão 8.0

## Instalação
Clone o repositório e restaure as dependências:
```
git clone https://github.com/marcelocamargosjr/UPIK.git
cd ImageStorageApi
dotnet restore
```

## Execução
Para executar a aplicação localmente:
```
dotnet run
```

## Configuração
A aplicação pode ser configurada através dos arquivos `appsettings.json` e `appsettings.Development.json`. As configurações padrão incluem:
- Níveis de log

## Testando as APIs
Você pode testar as APIs usando os seguintes comandos cURL:

### Listar Imagens
```
curl --location 'http://localhost:5184/api/Images' \
--header 'accept: application/json' \
--header 'Authorization: Bearer {token gerado em jwt.io}'
```

### Obter Imagem por ID
```
curl --location 'http://localhost:5184/api/Images/1' \
--header 'accept: application/json' \
--header 'Authorization: Bearer {token gerado em jwt.io}'
```

Para gerar o token JWT, utilize o site https://jwt.io/ com o segredo "upikrules".
