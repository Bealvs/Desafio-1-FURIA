# 📄 Documentação — Desafio 1: Experiência Conversacional FURIA

## 📌 Descrição do Projeto

O projeto é um **chatbot para fãs da FURIA** focado no time de CS, onde o usuário pode interagir de forma simples digitando números para obter informações como:
- Curiosidades sobre o time;
- Próximos jogos;
- Conhecer os jogadores;
- Cânticos da torcida;
- Títulos conquistados.

A interação é feita via Web Chat, com backend Node.js + Express, banco de dados PostgreSQL, e aplicação conteinerizada via Docker.

---

## 🚀 Funcionalidades Implementadas

- **Chat Web Simples** com interface amigável;
- **Menu de Opções** enviado automaticamente no início da conversa;
- **Respostas personalizadas** conforme a opção escolhida;
- **Mensagens de erro** amigáveis quando o input não é reconhecido;
- **Banco de Dados** (PostgreSQL) para armazenar as mensagens que o chatbot pode responder;
- **API Restful** no backend para buscar mensagens.

---

## 🛠️ Tecnologias Utilizadas

- **Frontend**: React + TypeScript
- **Backend**: Node.js + Express + Prisma ORM
- **Banco de Dados**: PostgreSQL
- **Containerização**: Docker e Docker Compose
- **Gerenciamento de Variáveis**: dotenv
- **CORS** configurado para aceitar requisições do frontend

---

## ⚙️ Como Rodar o Projeto

### Pré-requisitos:
- Docker instalado na máquina
- Docker Compose instalado

### Passos:

1. Clone o repositório:
```
git clone https://github.com/Bealvs/Desafio-1-FURIA.git
```
2. Entre na pasta do projeto:
```
cd nome-do-projeto
```
3. O ideal é abrir dois terminais para o frontend e backend;
4. Após entrar na pasta do backend:
```
npm install
```
5. Suba os containers:
```
docker compose build-no-cache
```
```
docker compose up
```
6. O frontend deve ser iniciado no outro terminal:
Da mesma forma forma que no caso do back, entre na pasta do front e no arquivo FURIA_chat.
```
npm install
```
```
npm run dev
```

