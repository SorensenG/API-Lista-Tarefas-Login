\# 📋 API de Gerenciamento de Tarefas

Uma API RESTful desenvolvida em \*\*Node.js\*\*, utilizando \*\*TypeScript\*\* e \*\*Express\*\*, com autenticação via \*\*JWT\*\* e persistência de dados com \*\*PostgreSQL\*\* via \*\*Prisma ORM\*\*.

\---

\## ✅ Funcionalidades

\- ✅ Cadastro de Usuário com senha criptografada

\- ✅ Login com geração de Token JWT

\- ✅ Autenticação via Middleware (Bearer Token)

\- ✅ Criação de Tarefas

\- ✅ Listagem de Tarefas por usuário autenticado

\- ✅ Atualização de Tarefas

\- ✅ Exclusão de Tarefas

\- ✅ Validação de Acesso: usuário só pode acessar, atualizar e excluir as suas próprias tarefas

\---

\## 🚀 Tecnologias Utilizadas

\- Node.js

\- TypeScript

\- Express

\- Prisma ORM → Interação com PostgreSQL

\- PostgreSQL → Banco de Dados relacional

\- bcryptjs → Criptografia de senha

\- jsonwebtoken → Geração de Token JWT

\- dotenv → Variáveis de ambiente

\- TSX → Execução de arquivos TypeScript

\---

\## 🛠️ Configuração do Banco de Dados

1\. Instale o \*\*PostgreSQL\*\* e crie um banco de dados, por exemplo: \`task\_manager\`.

2\. Configure a variável de ambiente \`.env\`:

\`\`\`env

DATABASE\_URL="postgresql://usuario:senha@localhost:5432/task\_manager"

Execute as migrações do Prisma:

bash

Copiar código

npx prisma migrate dev --name init

Gere o Prisma Client:

bash

Copiar código

npx prisma generate

📦 Instalação e Execução

bash

Copiar código

\# Clone o repositório

git clone https://github.com/SeuUsuario/API-Lista-Tarefas-Login.git

\# Acesse o diretório

cd API-Lista-Tarefas-Login

\# Instale as dependências

npm install

\# Dependências principais

npm install express bcryptjs jsonwebtoken dotenv @prisma/client pg

\# Dependências de desenvolvimento

npm install --save-dev typescript tsx prisma @types/node @types/express @types/bcryptjs @types/jsonwebtoken

\# Gere o Prisma Client

npx prisma generate

\# Execute o servidor

npx tsx src/server.ts

✅ Como Usar

POST /auth/register → Cadastrar usuário

POST /auth/login → Autenticar e obter Token JWT

GET /tasks → Listar tarefas do usuário autenticado

POST /tasks → Criar nova tarefa

PUT /tasks/:id → Atualizar uma tarefa

DELETE /tasks/:id → Excluir uma tarefa

✅ Autenticação

Usar token JWT no header:

Authorization: Bearer

✅ Estrutura

Camada de Repositório → Prisma Client

Camada de Casos de Uso → Regras de negócio

Camada de Controladores → Recebe requests e responde

Middleware → Autenticação via JWT

Factories → Injeta dependências entre as camadas

✅ Padrões e Boas Práticas

SOLID

Padrão MVC

Inversão de Dependências com Factories

Separação clara de responsabilidades

Autorização e Segurança
-----------------------

*   Autenticação via JWT → Authorization: Bearer
    
*   Senha armazenada com bcryptjs
    
*   Middleware de proteção para rotas sensíveis
    
*   Separação clara de camadas para manter o código modular
    

✅ Autor

Gabriel Sorensen[https://www.linkedin.com/in/gabriel-sorensen/](https://www.linkedin.com/in/gabriel-sorensen/)[https://github.com/SorensenG](https://github.com/SorensenG)

✅ Licença
---------

Este projeto está sob a licença MIT.
