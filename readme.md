# Anthony Monsalve

# Mini Market: Prueba técnica Vibes

## Estructura del Proyecto

```
/api -> Backend con Express y TypeScript
/web -> Frontend con Next.js (App Router)
/shared -> Tipos TypeScript compartidos
```

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
