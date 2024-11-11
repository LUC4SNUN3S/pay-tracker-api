# Pay tracker API

Este é um sistema robusto desenvolvido para otimizar o processo de recebimento de pagamentos realizados no dia anterior. Ele permite o upload de arquivos contendo os dados de pagamento, visualização paginada, edição e exclusão de dados, além de fornecer uma funcionalidade de auditoria e exportação para CSV.

## Índice

1. [Descrição](#descrição)
2. [Funcionalidades](#funcionalidades)
3. [Tecnologias](#tecnologias)
4. [Instalação](#instalação)
5. [API](#api)

## Descrição

Este é um sistema robusto desenvolvido para otimizar o processo de recebimento de pagamentos. Ele permite o upload de arquivos contendo os dados de pagamento, visualização paginada, edição e exclusão de dados, além de fornecer uma funcionalidade de auditoria e exportação para CSV.

## Funcionalidades

- **Upload de Arquivo**: permite o upload de um arquivo contendo os dados de pagamento.
- **Visualização Paginada**: os dados do arquivo são exibidos de forma paginada para facilitar a visualização e auditoria.
- **Edição e Exclusão de Dados**: o sistema permite editar e excluir dados caso haja incoerências durante a verificação.
- **Confirmação e Auditoria**: após a verificação, os dados são confirmados e não podem mais ser alterados, garantindo a integridade dos dados para auditorias.
- **Exportação em CSV**: permite a exportação dos dados verificados em formato CSV para fácil compartilhamento e armazenamento.

## Tecnologias

Este projeto foi desenvolvido utilizando as seguintes tecnologias:

- **NestJS**: framework para desenvolvimento de APIs.
- **FastCSV**: biblioteca para manipulação e exportação de arquivos CSV.
- **PostgreSQL**: banco de dados relacional para armazenar os dados dos pagamentos.
- **Swagger**: utilizado para documentação da API.
- **Docker**: facilita a configuração e execução da aplicação.

## Instalação

Siga os passos abaixo para rodar o projeto localmente.

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/LUC4SNUN3S/pay-tracker-api.git
   cd pay-tracker-api

   ```

2. **Configurar o Docker**

- Certifique-se de ter o Docker instalado em sua máquina. O projeto já possui um arquivo `docker-compose.yml` configurado para rodar o banco de dados e o servidor da aplicação. Caso o Docker não esteja instalado, acesse o [link para instalação do Docker](https://docs.docker.com).
  - Instale o Docker na maquina
  - Instale o docker compose na maquina

3. **Configurar as Variáveis de Ambiente**  
   Crie um arquivo `.env` na raiz do projeto e configure as variáveis necessárias. O projeto contém um arquivo de exemplo `.env`; basta copiar e colar!

4. **Iniciar a aplicação com Docker:**

   ```bash
   docker-compose up -d

   ```

5. **Instale as dependências:**

   ```bash
   docker exec -it pay-tracker-api sh
   ```

   ```bash
    npm i
   ```

6. **Rode as Migrations:**

   - **Dentro do container, caso não esteja, rode o comando `docker exec` acima.**

   ```bash
   npx prisma migrate dev
   ```

   - **Depois desse passo a passo seu sistema deve estar rodando normalmente.**

7. Verifique se o projeto está rodando normalmente:
   ```bash
   docker logs -f pay-tracker-api
   ```

## API

Acesse a documentação da api na url: http://localhost:3000/doc
