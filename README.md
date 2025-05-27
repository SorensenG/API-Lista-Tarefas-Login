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


