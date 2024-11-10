# Pay tracker API

Este é um sistema robusto desenvolvido para otimizar o processo de recebimento de pagamentos realizados no dia anterior. Ele permite o upload de arquivos contendo os dados de pagamento, visualização paginada, edição e exclusão de dados, além de fornecer uma funcionalidade de auditoria e exportação para CSV.

## Índice

1. [Descrição](#descrição)
2. [Funcionalidades](#funcionalidades)
3. [Tecnologias](#tecnologias)
4. [Instalação](#instalação)
5. [API](#api)

## Descrição

O sistema foi desenvolvido para automatizar a verificação e confirmação dos pagamentos feitos no dia anterior. João, um funcionário da empresa, precisava de uma solução mais eficiente e robusta para manipular os dados de pagamentos que eram processados manualmente via Excel. O sistema permite o upload dos dados, visualização e auditoria através de uma interface API REST, garantindo a integridade e a agilidade no processo.

## Funcionalidades

- **Upload de Arquivo**: Permite o upload de um arquivo contendo os dados de pagamento.
- **Visualização Paginada**: Dados do arquivo são exibidos de forma paginada para facilitar a visualização e auditoria.
- **Edição e Exclusão de Dados**: O sistema permite editar e excluir dados caso haja incoerências durante a verificação.
- **Confirmação e Auditoria**: Após a verificação, os dados são confirmados e não podem mais ser alterados, garantindo a integridade dos dados para as auditorias.
- **Exportação em CSV**: Permite a exportação dos dados verificados em formato CSV para fácil compartilhamento e armazenamento.

## Tecnologias

Este projeto foi desenvolvido utilizando as seguintes tecnologias:

- **NestJS**: Framework para desenvolvimento de APIs.
- **FastCSV**: Biblioteca para manipulação e exportação de arquivos CSV.
- **PostgreSQL**: Banco de dados relacional para armazenar os dados dos pagamentos.
- **Swagger**: Para documentação da API.
- **Docker**: Utilizado para facilitar a configuração e execução da aplicação.
- **Jest**: Framework para testes unitários e de integração.

## Instalação

Siga os passos abaixo para rodar o projeto localmente.

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/LUC4SNUN3S/pay-tracker-api.git
   cd pay-tracker-api
   ```
2. **Configurar o Docker**

- Certifique-se de ter o Docker instalado em sua máquina. O projeto já possui um arquivo docker-compose.yml configurado para rodar o banco de dados e o servidor da aplicação. Caso o Docker não esteja instalado, aqui está o link para instalação do Docker.

3. **Configurar as Variáveis de Ambiente**
   Crie um arquivo .env na raiz do projeto e configure as variáveis necessárias. O projeto contem um arquivo de exemplo .env:

4. **Iniciar a aplicação Docker**

   ```bash
   docker-compose up -d
   ```

5. Instale as dependencias:
   ```bash
    docker exec -it pay-tracker-api sh
    npm i
   ```
6. Rode as Migrations:
   ```bash
   docker exec -it pay-tracker-api sh
   npx prisma migration deploy
   ```
   **Depois desse passo a passo seu sistema deve estar rodendo normalmente.**

## API

Acesse a documentação da api na url: http://localhost:3000/api
