# ⭐ Desafio Técnico – Desenvolvedor(a) Front-End (Next.js)

## Como Rodar o Projeto

### Pré-requisitos
- Node.js 18+ instalado
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone [seu-repositório]

# Entre na pasta do projeto
cd plan-frontend-test

# Instale as dependências
npm install

# Rode o projeto em modo de desenvolvimento
npm run dev
```

O projeto estará disponível em [http://localhost:3000](http://localhost:3000)

### Scripts Disponíveis

```bash
npm run dev      # Inicia o servidor de desenvolvimento
npm run build    # Cria a build de produção
npm run start    # Inicia o servidor de produção
npm run lint     # Executa o linter
npm run format   # Formata o código
```

---

## 📁 Estrutura do Projeto

```
src/
├── app/              # Páginas e rotas do Next.js (App Router)
├── components/       # Componentes reutilizáveis
├── hooks/            # Hooks customizados
├── services/         # Serviços de API (REST Countries)
├── styles/           # Estilos globais (SCSS)
└── @types/           # Definições de tipos TypeScript
```

---

## ⭐ Objetivo

​
Desenvolver uma aplicação web com **Next.js** que consuma a [REST Countries API](https://restcountries.com/#rest-countries), permitindo ao usuário explorar e visualizar informações sobre países de forma interativa e responsiva.
​

---

​

## ⭐ Contexto

​
A aplicação será um catálogo de países com recursos de filtragem e visualização de detalhes. O usuário deve poder:
​

- Navegar por uma lista de países.
- Filtrar por:
  - Nome do país (busca textual).
  - Continente (checkboxes).
  - Idioma (select).
- Acessar uma página com detalhes do país selecionado.
  ​

---

​

## ⭐ Layout

Segue links do layout para aplicação:
  - [Figma Componentes](https://www.figma.com/design/uqRKSNiAtLlHWzg6qs7J0v/TESTE-FRONT-PLAN?node-id=0-1&p=f)
  - [Figma Apresentação](https://www.figma.com/proto/uqRKSNiAtLlHWzg6qs7J0v/TESTE-FRONT-PLAN?node-id=2-615&t=jAEkXLJ8nXUMIDD4-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1)

**A responsividade deve ser aplicada para manter o layout mais coerente com o definido acima.**

---

​

## ⭐ Requisitos Técnicos

​

- Utilizar **Next.js** como framework principal ([https://nextjs.org/](https://nextjs.org/)).
- Utilizar **ESLint**, conforme [documentação oficial](https://nextjs.org/docs/app/api-reference/config/eslint).
- Utilizar **TypeScript**
- Garantir **responsividade** da aplicação.
- Exibir as informações dos países **em português**, quando disponível, utilizando o campo `translations.por` da versão `v3.1` da REST Countries API.
- Código organizado, componentizado e limpo.
  ​

---

​

## ⭐ Funcionalidades Esperadas

​

### 1. Página Inicial

- Lista de países com:
  - Nome (em português)
  - Bandeira
  - Região
- Filtros:
  - **Busca por nome**
  - **Filtro por continente** (checkbox)
  - **Filtro por idioma** (select)
    ​

### 2. Página de Detalhes

- Informações completas de um país:
  - Nome oficial
  - População
  - Moeda
  - Línguas faladas
  - Bandeira
  - Região / Sub-região
    ​

---

​

## ⭐ Diferenciais (Desejável, não obrigatório)

​

- Estilização moderna: **TailwindCSS**, **CSS Modules**
- Configuração de **Prettier** e **ESLint**
- Considerações básicas de acessibilidade
  ​

---

## ⭐ Considerações sobre o repositório

​

Este projeto deve ser utilizado como base para o desenvolvimento do seu teste. Alguns componentes estão presentes apenas como exemplo para o desenvolvedor, e devem ser removidos antes do início efetivo do desenvolvimento do teste.

​

## ⭐ Entrega

​

1. Faça um fork do repositório público <link do repositorio>.
2. Inclua no `README.md` as seguintes informações:
   - Instruções para rodar localmente.
   - Breve explicação sobre suas escolhas técnicas.
   - Link do deploy (se houver).
3. Submeta o link do repositório e, se aplicável, do deploy.
   ​
   Boa sorte! Estamos ansiosos para ver sua solução. 🚀

​

## ⭐ Instruções

As instruções para rodar o projeto localmente estão na seção [Como Rodar o Projeto](#como-rodar-o-projeto) no topo deste README.

## ⭐ Breve explicação

### Arquitetura

- **Next.js 15 com App Router**: Utilizado para aproveitar Server Components, permitindo buscar dados da API diretamente no servidor sem expor chamadas ao cliente. A página inicial faz o fetch no servidor e passa os dados ao client component que gerencia filtros e paginação. A página de detalhes é 100% Server Component.
- **TypeScript com strict mode**: Tipagem forte em todo o projeto, com interfaces definidas para os dados da API e props dos componentes.
- **Fetch nativo do Next.js**: Substituído o axios pelo `fetch` nativo, aproveitando o cache integrado do Next.js com `revalidate: 3600` (1 hora) para otimizar performance e reduzir chamadas à API.

### Estilização

- **TailwindCSS 4**: Utilizado para estilização utilitária e responsividade com breakpoints (`sm`, `lg`).
- **SCSS (globals.scss)**: Classes CSS responsivas com `@media` queries para valores que não podem ser aplicados via Tailwind em inline styles, mantendo o layout desktop pixel-perfect.
- **Tokens de cores centralizados** (`colors.ts`): Todas as cores do projeto em um único arquivo, facilitando manutenção e consistência visual.

### Dados e Filtros

- **REST Countries API v3.1**: Campo `?fields=` utilizado para otimizar o payload, trazendo apenas os campos necessários.
- **Traduções em português**: Nome e nome oficial dos países exibidos em português via `translations.por`, com fallback para inglês.
- **Filtros combinados**: Busca textual (PT e EN), filtro por continente (checkboxes multi-select) e filtro por idioma (select) funcionam em conjunto com paginação.
- **Mapeamento de regiões**: Regiões e sub-regiões da API traduzidas para português, separando "América do Sul" de "América do Norte" dentro da região "Americas" da API.

### Qualidade

- **ESLint** configurado com plugins para TypeScript, React, import helpers e integração com Prettier.
- **Prettier** configurado para formatação consistente (single quotes, sem semicolons, trailing commas).
- **Acessibilidade**: Atributos `aria-label` nos controles interativos, `sr-only` para inputs ocultos, HTML semântico (`<header>`, `<main>`, `<footer>`), atributo `lang="pt-BR"` no HTML.
- **Componentização**: 11 componentes reutilizáveis com barrel exports, separação clara de responsabilidades.

## ⭐ Link do deploy (se houver)

