# Multitenant

A REST API built with Fastify, Prisma and PostgreSQL for multi-tenant SaaS-style applications, with user authentication, organization management and lead tracking.

<p align="center">
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-7.0-3178C6?logo=typescript&logoColor=white" />
  <img alt="Node.js" src="https://img.shields.io/badge/Node.js-20+-339933?logo=nodedotjs&logoColor=white" />
  <img alt="Fastify" src="https://img.shields.io/badge/Fastify-5.x-000000?logo=fastify&logoColor=white" />
  <img alt="PostgreSQL" src="https://img.shields.io/badge/PostgreSQL-16-336791?logo=postgresql&logoColor=white" />
  <img alt="Prisma" src="https://img.shields.io/badge/Prisma-7.x-2D3748?logo=prisma&logoColor=white" />
</p>

## About

This project implements a basic multi-tenant backend where each user can belong to one or more organizations. The API allows authentication, organization creation at signup, and access to resources scoped by the authenticated user context.

The application is structured to support a SaaS flow where each organization can manage its own leads and interactions independently.

## Features

- User signup with organization creation in the same flow
- Signin with JWT authentication
- Protected routes with middleware validation
- Multi-tenant data model using Organization, OrganizationUser, Lead and Interaction
- PostgreSQL persistence with Prisma ORM
- Validation using Zod
- Password hashing with bcryptjs

## Tech Stack

- [Fastify](https://fastify.dev/)
- [Node.js](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Prisma](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [node-postgres](https://node-postgres.com/) with the Prisma PostgreSQL driver adapter
- [JWT](https://jwt.io/)
- [bcryptjs](https://www.npmjs.com/package/bcryptjs)
- [Zod](https://zod.dev/)

## Requirements

Before starting, make sure you have:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) 20.19+, 22.13+, or 24+
- [pnpm](https://pnpm.io/)
- [Docker](https://www.docker.com/) and Docker Compose (for the PostgreSQL container)

## Getting Started

### 1) Clone the repository

```bash
git clone https://github.com/davi1985/multitenant-application.git
cd multitenant-application
```

### 2) Install dependencies and generate the Prisma Client

```bash
pnpm install
```

### 3) Start the database

The project includes a Docker Compose configuration for PostgreSQL:

```bash
docker compose up -d db
```

### 4) Environment variables

A local `.env` file is already present in the project and contains the default values used for development:

```env
DATABASE_URL="postgresql://root:root@localhost:5432/multitenant?schema=public"
JWT_SECRET="unsecure-secret"
```

### 5) Run Prisma migrations

```bash
pnpm exec prisma migrate dev
```

### 6) Start the API

```bash
pnpm dev
```

The server starts on:

```text
http://localhost:3001
```

To compile the API and run the compiled output:

```bash
pnpm build
pnpm start
```

## API routes

### Public routes

- `POST /api/auth/signup`
- `POST /api/auth/signin`

### Protected routes

- `GET /api/leads`

## Project structure

```text
.
├── prisma/
│   └── schema/
├── src/
│   ├── controllers/
│   ├── middlewares/
│   ├── routes/
│   └── index.ts
├── .env
├── docker-compose.yml
├── package.json
├── tsconfig.json
└── README.md
```

Made with ❤️ by [davi1985](https://github.com/davi1985).
