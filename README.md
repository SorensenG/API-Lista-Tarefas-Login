# 📋 API de Gerenciamento de Tarefas

Uma API RESTful desenvolvida em **Node.js**, utilizando **TypeScript** e **Express**, com autenticação via **JWT** e banco de dados **em memória**.

---

## ✅ Funcionalidades

- Cadastro de Usuário
- Login com geração de Token JWT
- Criação de Tarefas
- Listagem de Tarefas
- Atualização de Tarefas
- Exclusão de Tarefas
- Validação de Acesso: usuário só pode acessar as suas próprias tarefas

---

## 🚀 Tecnologias Utilizadas

- Node.js
- TypeScript
- Express
- bcryptjs → Criptografia de senha
- jsonwebtoken → Geração de Token JWT
- TSX → Execução de arquivos TypeScript
- Banco de Dados: **In-Memory** (memória)

---

🛠️ Estrutura do Projeto
perl
Copiar
Editar
src/
├── config/                  # Configurações (JWT)
├── controllers/            # Controladores
├── entities/               # Entidades (User, Task)
├── middlewares/            # Middlewares (auth)
├── repositories/           # Interfaces e Implementações
├── routes/                 # Definição das rotas
├── use-cases/              # Casos de uso
├── factories/              # Factories para Controllers
├── app.ts                  # Configuração do Express
└── server.ts               # Inicialização do servidor
---

## 📦 Instalação e Execução

```bash
# Clone o repositório
git clone https://github.com/SeuUsuario/API-Lista-Tarefas-Login.git

# Acesse o diretório
cd API-Lista-Tarefas-Login

# Instale as dependências
npm install
npm install express bcryptjs jsonwebtoken
npm install --save-dev typescript tsx @types/node @types/express @types/bcryptjs @types/jsonwebtoken

# Execute o servidor
npx tsx src/server.ts


