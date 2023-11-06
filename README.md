# Energizou - API de Gestão de Empresas
## Back-End 

Para o desafio técnico, desenvolvi uma API RESTful para fornecer e gerenciar os dados de uma aplicação web que também foi criada por mim.

## Especificações

- **Express**: Framework de aplicação web para Node.js.
- **⭐ TypeScript**: Linguagem de programação com tipagem forte que é baseada em JavaScript.
- **⭐ TypeORM**: ORM que pode ser executado em Node.js, Browser, Cordova, PhoneGap, Ionic, React Native, NativeScript e Electron.
- **Docker**: Usado para contêinerizar o banco de dados SQL.
- **bcrypt**: Utilizado para a criptografia de senhas dos usuários.
- **zod**: Usado para a validação de requisições.

## Instalação

Siga os passos a seguir para instalar a API usando o Yarn:

```bash
yarn install
docker-compose up -d
yarn typeorm migration:run
yarn typeorm seed:run
yarn start:dev
```

Nota: Certifique-se de que o Docker está em execução antes de executar os comandos. O comando yarn install instalará as dependências necessárias. O comando do Docker inicializa o contêiner do banco de dados. Os comandos TypeORM são usados para executar as migrações e semear o banco de dados com dados iniciais. Finalmente, yarn start:dev iniciará o servidor de desenvolvimento.

**OBS:** O envio do arquivo `.env` para o repositório foi intencional para simplificar o processo de execução e avaliação do projeto.


## Endpoints da API

A API permite a criação, obtenção, atualização e exclusão de dados de empresas associadas a um usuário.

#### Retorna um usuario

```http
  GET /user/:userId
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `userId` | `string` | **Obrigatório**. A chave para busca no Banco |

#### Cria um usuario

```http
  POST /user/
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `name`      | `string` | **Obrigatório**. |
| `email`      | `string` | **Obrigatório**. |
| `password`      | `string` | **Obrigatório**. |
| `permission`      | `string` | **Opicional**. Por padrão: `DEFAULT` |

### Cria uma Empresa

```http
  POST /company/:userId
```

Cria uma nova empresa associada ao usuário especificado.

| Parâmetro        | Tipo      | Descrição                               |
| :--------------- | :-------- | :-------------------------------------- |
| `userId`         | `string`  | **Obrigatório**. ID do usuário no path. |
| `cnpj`           | `string`  | **Obrigatório**. CNPJ da empresa.       |
| `name`           | `string`  | **Obrigatório**. Nome da empresa.       |
| `cep`            | `string`  | **Obrigatório**. CEP da empresa.        |
| `address`        | `string`  | **Obrigatório**. Endereço da empresa.   |
| `address_number` | `number`  | **Obrigatório**. Número do endereço.    |
| `phone`          | `number`  | **Obrigatório**. Telefone da empresa.   |

### Obtém uma Empresa

```http
  GET /company/:companyCnpj
```

Obtém os dados de uma empresa específica pelo CNPJ.

| Parâmetro     | Tipo     | Descrição                                   |
| :------------ | :------- | :------------------------------------------ |
| `companyCnpj` | `string` | **Obrigatório**. CNPJ da empresa no path.   |

### Obtém todas as Empresas de um Usuário

```http
  GET /companies/:userId
```

Lista todas as empresas associadas ao ID do usuário fornecido.

| Parâmetro | Tipo     | Descrição                              |
| :-------- | :------- | :------------------------------------- |
| `userId`  | `string` | **Obrigatório**. ID do usuário no path.|

### Deleta uma Empresa

```http
  DELETE /company/:userId/company/:companyCnpj
```

Exclui uma empresa específica associada ao usuário.

| Parâmetro     | Tipo     | Descrição                                  |
| :------------ | :------- | :----------------------------------------- |
| `userId`      | `string` | **Obrigatório**. ID do usuário no path.    |
| `companyCnpj` | `string` | **Obrigatório**. CNPJ da empresa no path.  |

### Atualiza uma Empresa

```http
  PUT /company/:userId/company/:currentCnpj
```

Atualiza os dados de uma empresa existente.

| Parâmetro        | Tipo      | Descrição                                       |
| :--------------- | :-------- | :---------------------------------------------- |
| `userId`         | `string`  | **Obrigatório**. ID do usuário no path.         |
| `currentCnpj`    | `string`  | **Obrigatório**. CNPJ atual da empresa no path. |
| `cnpj`           | `string`  | **Opcional**. Novo CNPJ da empresa.             |
| `name`           | `string`  | **Opcional**. Novo nome da empresa.             |
| `cep`            | `string`  | **Opcional**. Novo CEP da empresa.              |
| `address`        | `string`  | **Opcional**. Novo endereço da empresa.         |
| `address_number` | `number`  | **Opcional**. Novo número do endereço.          |
| `phone`          | `number`  | **Opcional**. Novo telefone da empresa.         |

### Valida um Usuário

```http
  POST /login/:email
```

Valida as credenciais do usuário, retornando os detalhes do usuário se a senha for correta.

| Parâmetro | Tipo     | Descrição                                   |
| :-------- | :------- | :------------------------------------------ |
| `email`   | `string` | **Obrigatório**. Email do usuário no path.  |

#### Corpo da Requisição

| Parâmetro | Tipo     | Descrição                               |
| :-------- | :------- | :-------------------------------------- |
| `password`| `string` | **Obrigatório**. Senha do usuário.      |

#### Respostas

- `200 OK`: Credenciais válidas - retorna detalhes do usuário.
- `400 Bad Request`: Credenciais inválidas - retorna uma mensagem de erro.

Nota: Todos os endpoints podem retornar diferentes códigos de status HTTP de acordo com o resultado da operação, como 201 (Criado), 200 (OK), 404 (Não Encontrado) e 500 (Erro Interno do Servidor), além de mensagens de erro específicas.
