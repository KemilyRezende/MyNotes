# **MyNotes - Documentação**

## **1. Apresentação**

**MyNotes** é uma aplicação web para criação e organização de notas rápidas, com interface inspirada em post-its. O projeto permite adicionar, editar e excluir notas, armazenando os dados em um banco de dados local PostgreSQL.

**Tecnologias utilizadas:**

- **Frontend:** React.js, CSS Modules (mobile-first)
- **Backend:** NestJS
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

Antes de tudo, clone este repositório:

```bash
git clone https://github.com/KemilyRezende/MyNotes.git
cd MyNotes
```

### **Backend**

```bash
cd backend
npm install
```

Crie o arquivo .env com os dados do PostgreSQL, por exemplo:

```bash
PORT=3000

DB_HOST=localhost
DB_PORT=5432
DB_USER=root
DB_PASS=1234
DB_NAME=mynotes
```

Rode a aplicação:

```bash
npm run start:dev
```

- Certifique-se de que o PostgreSQL está instalado e em execução localmente antes de iniciar o backend.
- As credenciais e configurações devem estar corretamente definidas no arquivo `.env`.


### **Frontend**

```bash
cd frontend
npm install
```

Configure o arquivo .env com a URL da API, por exemplo:

```bash
VITE_API_URL=http://localhost:3000
```

Rode a aplicação:

```bash
npm run dev
```

- A aplicação será acessível em http://localhost:5173 (ou porta do Vite).

## **7. Visualização**

### **Versão Desktop**

![Tela principal - Desktop](https://github.com/KemilyRezende/MyNotes/blob/main/telas/Desktop_main.png)  
*Tela principal exibindo os post-its na versão desktop*

![Tela de criação - Desktop](https://github.com/KemilyRezende/MyNotes/blob/main/telas/Desktop_create.png)  
*Interface de criação de post-it na versão desktop*

![Tela de edição - Desktop](https://github.com/KemilyRezende/MyNotes/blob/main/telas/Desktop_edit.png)  
*Interface de edição de post-it na versão desktop*

### **Versão Tablet**

![Tela principal - Tablet](https://github.com/KemilyRezende/MyNotes/blob/main/telas/Tablet_main.png)  
*Tela principal exibindo os post-its na versão tablet*

![Tela de criação - Tablet](https://github.com/KemilyRezende/MyNotes/blob/main/telas/Tablet_create.png)  
*Interface de criação de post-it na versão tablet*

![Tela de edição - Tablet](https://github.com/KemilyRezende/MyNotes/blob/main/telas/Tablet_edit.png)  
*Interface de edição de post-it na versão tablet*


### **Versão Smartphone**

![Tela principal - Smartphone](https://github.com/KemilyRezende/MyNotes/blob/main/telas/Smartphone_main.png)  
*Tela principal exibindo os post-its na versão mobile*

![Tela de criação - Smartphone](https://github.com/KemilyRezende/MyNotes/blob/main/telas/Smarphone_create.png)  
*Interface de criação de post-it na versão mobile*

![Tela de edição - Smartphone](https://github.com/KemilyRezende/MyNotes/blob/main/telas/Smartphone_edit.png)  
*Interface de edição de post-it na versão mobile*

### **Protótipos - Figma**

Os protótipos utilizados no desenvolvimento da interface estão disponíveis na pasta [Prototipos - Figma](https://github.com/KemilyRezende/MyNotes/tree/main/Prototipos%20-%20Figma).


