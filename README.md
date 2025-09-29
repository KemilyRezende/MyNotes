# **MyNotes - Documentação**

## **1. Apresentação**

**MyNotes** é uma aplicação web para criação e organização de notas rápidas, com interface inspirada em post-its. O projeto permite adicionar, editar e excluir notas, armazenando os dados em um banco de dados local PostgreSQL.

**Tecnologias utilizadas:**

- **Frontend:** React.js, JSX, CSS Modules (mobile-first)
- **Backend:** NestJS, Node.js
- **Banco de Dados:** PostgreSQL (local)
- **Linguagem:** TypeScript (backend), JavaScript/JSX (frontend)

---

## **2. Funcionalidades**

- Criar novas notas com título e conteúdo.
- Editar notas existentes.
- Excluir notas.
- Visualização das notas em lista ou grid.
- Responsivo para diferentes tamanhos de tela.
- Persistência local usando PostgreSQL.

---

## **3. Estrutura do Sistema**

### **3.1 Backend**

```bash
backend/
└─ src/
    ├─ Note/
    │   ├─ note.controller.ts
    │   ├─ note.entity.ts
    │   ├─ note.module.ts
    │   └─ note.service.ts
    ├─ app.controller.ts
    ├─ app.module.ts
    ├─ app.service.ts
    └─ main.ts
└─ test/
└─ .env
└─ package.json
└─ tsconfig.json
```


**Descrição dos arquivos principais:**

- `note.controller.ts`: gerencia as rotas relacionadas às notas (CRUD).
- `note.service.ts`: lógica de negócio para manipulação de notas.
- `note.entity.ts`: modelo de dados da nota.
- `app.module.ts`: módulo principal que importa o módulo de notas.
- `main.ts`: ponto de entrada da aplicação.

### **3.2 Frontend**

```bash
frontend/
└─ src/
    ├─ Components/
    │   ├─ Header/
    │   │   ├─ Header.jsx
    │   │   └─ Header.module.css
    │   ├─ Button/
    │   │   ├─ Button.jsx
    │   │   └─ Button.module.css
    │   ├─ NewNote/
    │   │   ├─ NewNote.jsx
    │   │   └─ NewNote.module.css
    │   └─ Note/
    │       ├─ Note.jsx
    │       └─ Note.module.css
    ├─ services/
    │   └─ api.ts
    ├─ App.jsx
    ├─ App.css
    └─ index.jsx
└─ package.json
└─ vite.config.js
```


**Descrição dos componentes:**

- `Header`: barra superior da aplicação.
- `Button`: botão reutilizável.
- `NewNote`: formulário para criação de nova nota.
- `Note`: card de nota individual com opções de edição/exclusão.

---

## **4. Banco de Dados**

**Tabela:** `notes`

| Campo      | Tipo         | Descrição             |
| ---------- | ------------ | -------------------- |
| id         | SERIAL PK    | Identificador da nota |
| title      | VARCHAR(100) | Título da nota        |
| content    | TEXT         | Conteúdo da nota      |
| created_at | TIMESTAMP    | Data de criação       |
| updated_at | TIMESTAMP    | Última atualização    |

- Todas as notas são armazenadas localmente no PostgreSQL.
- Conexão configurada no arquivo `.env`.

---

## **5. Fluxo de Atividades**

**Fluxo principal:**

1. Usuário acessa a aplicação.
2. Visualiza lista de notas existentes.
3. Clica em “Nova Nota” para criar uma nota.
4. Edita ou exclui notas existentes.
5. As alterações são salvas no banco de dados local.

---

## **6. Instalação e Execução**

### **Backend**

```bash
cd backend
npm install
# configurar .env com dados do PostgreSQL
npm run start:dev
```

### **Frontend**

```bash
cd frontend
npm install
npm run dev
```

- A aplicação será acessível em http://localhost:5173 (ou porta do Vite).

## **7. Visualização**
