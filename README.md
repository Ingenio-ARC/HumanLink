# HumanLink
Conecta Humanos, en anonimato.

## Instalación y uso

### Requisitos
- Node.js >= 18
- pnpm (recomendado)

### Instalación
1. Clona el repositorio:
   ```sh
   git clone <URL-del-repo>
   cd HumanLink
   ```
2. Instala las dependencias:
   ```sh
   pnpm install
   ```

### Configuración
1. Copia el archivo `.env.example` a `.env` y edítalo con tus credenciales de Worldcoin:
   ```sh
   cp .env.example .env
   # Edita el archivo .env con tu APP_ID y ACTION
   ```

### Ejecución en desarrollo
```sh
pnpm run dev
```
Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

### Compilar para producción
```sh
pnpm run build
```

### Vista previa de producción
```sh
pnpm run preview
```

---

Para más información sobre la integración con Worldcoin MiniKit visita:
https://docs.worldcoin.org/mini-apps
