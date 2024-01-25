# Image Gallery Project

## Descrição
Este é o repositório do projeto Image Gallery, uma aplicação web desenvolvida em Next.js para gerenciar e exibir uma galeria de imagens. O projeto utiliza React e outras tecnologias modernas para oferecer uma experiência de usuário rica e responsiva.

## Tecnologias Utilizadas
- **Next.js (14.1.0):** Framework React para produção.
- **React (18):** Biblioteca JavaScript para construção de interfaces de usuário.
- **Tailwind CSS (3.3.0):** Framework CSS para design rápido e responsivo.

## Estrutura do Projeto
- `public`: Contém os arquivos estáticos utilizados no projeto.
- `src`: Contém o código fonte da aplicação.

## Pré-requisitos
- Node.js (recomenda-se a última versão estável)
- npm (gerenciador de pacotes)

## Instalação
Siga estas instruções para configurar o ambiente de desenvolvimento.

1. Clone o repositório:

    ```bash
    git clone https://github.com/marcelocamargosjr/UPIK.git
    ```

2. Acesse o diretório do projeto:

    ```bash
    cd image-gallery
    ```

3. Instale as dependências do projeto:

    ```bash
    npm install
    ```

## Uso
Para rodar a aplicação localmente, siga os passos abaixo:

1. Inicie o servidor de desenvolvimento:

    ```bash
    npm run dev
    ```

2. Acesse `http://localhost:3001` no seu navegador. (Nota: a porta `3000` não deve ser utilizada, conforme instrução abaixo).

## Configuração de Portas
**Importante:** Ao executar este projeto juntamente com as APIs, não utilize a porta `3000` para o projeto front-end, pois esta porta é reservada para a API 'likes-management-api'. Utilize a porta `3001` ou outra que esteja disponível. O uso da porta `3000` pode causar conflitos durante a execução.
