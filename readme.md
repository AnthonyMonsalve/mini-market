# Anthony Monsalve

# Mini Market: Prueba técnica Vibes

Aplicación fullstack con **Express (API)** y **Next.js (Web)** en TypeScript.

## Estructura del Proyecto

```
/api -> Backend con Express y TypeScript
/web -> Frontend con Next.js (App Router)
/shared -> Tipos TypeScript compartidos
```

## Requisitos

- Node.js >= 18
- npm

## API (Backend)

```bash
cd api
npm install
npm run dev   # Levanta por defecto en http://localhost:3001
```

---

## Web (Frontend)

```bash
cd web
npm install
npm run dev   # Levanta por defecto en http://localhost:3000
```

## Variables de entorno

En `/web/.env` debes configurar:

```env
NEXT_PUBLIC_API_BASE=http://localhost:3001
```

## Decisiones

- Se separó el proyecto en un **monorepo** con carpetas `api/`, `web/` y `shared/`.
- Alias configurados con `tsconfig-paths`:
  - `@/*` → rutas internas del frontend
  - `@shared/*` → módulos compartidos entre frontend y backend

---

## Pendientes

- Agregar persistencia en MongoDB (actualmente los productos están en memoria/mock).
- Implementar tests unitarios para el algoritmo y endpoints.
- Manejo avanzado de errores y validaciones de datos en backend.
- Autenticación/usuarios (fuera del alcance actual).
