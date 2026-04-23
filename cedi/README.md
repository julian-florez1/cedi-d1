# D1 CEDI - Sistema de Gestión de Inventario

Aplicación web para la gestión de productos, bodegas, inventario y movimientos de inventario del CEDI D1.

## Tecnologías

- React 19 + TypeScript
- Vite
- Tailwind CSS 4
- TanStack Table
- React Hook Form
- React Router DOM

## Requisitos

- Node.js 18 o superior
- npm 9 o superior

## Instalación

1. Clona el repositorio:
```bash
git clone 
cd cedi
```

2. Instala las dependencias:
```bash
npm install
```

3. Levanta el servidor de desarrollo:
```bash
npm run dev
```

4. Abre el navegador en `http://localhost:5173`

## Scripts disponibles

| Comando | Descripción |
|---|---|
| `npm run dev` | Levanta el servidor de desarrollo |
| `npm run build` | Genera el build de producción |
| `npm run preview` | Previsualiza el build de producción |
| `npm run lint` | Ejecuta el linter |

## Módulos

- **Productos** - CRUD completo de productos
- **Bodegas** - CRUD completo de bodegas
- **Inventario** - Consulta de stock por bodega
- **Movimientos** - Registro de entradas, salidas y transferencias

## Notas

La aplicación usa datos mock en formato JSON ubicados en `public/mock_data/`. No requiere backend para funcionar.