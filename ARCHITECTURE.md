# Camaraza Pizzas
## Arquitectura del Proyecto
Versión: 1.1.0

---

# Objetivo

Construir una Progressive Web App (PWA) profesional, rápida, segura, escalable y modular utilizando únicamente tecnologías gratuitas.

Tecnologías principales:

- HTML5
- CSS3
- JavaScript (ES6+)
- Supabase
- GitHub Pages
- GitHub Actions
- Service Worker
- Manifest
- SQL

---

# Principios del proyecto

1. Código limpio.
2. Archivos pequeños.
3. Una función por archivo.
4. Diseño modular.
5. Seguridad primero.
6. Alto rendimiento.
7. Compatible con móviles.
8. Fácil mantenimiento.

---

# Estructura del proyecto

```
Camaraza-Pizzas/

assets/
│
├── icons/
├── images/
└── fonts/

css/
│
└── app.css

docs/

js/
│
├── app.js
├── config.js
├── supabase.js
├── auth.js
├── ui.js
├── menu.js
├── orders.js
├── dashboard.js
├── users.js
├── helpers.js
└── pwa.js

sql/

.github/
└── workflows/

index.html
manifest.json
sw.js
robots.txt
sitemap.xml
README.md
ROADMAP.md
CHANGELOG.md
ARCHITECTURE.md
LICENSE
```

---

# Responsabilidad de cada carpeta

## assets

Todos los recursos gráficos.

- imágenes
- iconos
- fuentes

---

## css

Todo el diseño visual.

Nunca escribir CSS dentro del HTML.

---

## js

Toda la lógica del sistema.

Cada archivo tendrá una única responsabilidad.

---

## sql

Scripts SQL de Supabase.

Tablas.

Funciones.

Triggers.

Políticas RLS.

Backups.

---

## docs

Documentación técnica.

Diagramas.

Notas.

Versiones.

---

## .github

Automatizaciones mediante GitHub Actions.

---

# Flujo de carga

index.html

↓

app.css

↓

config.js

↓

supabase.js

↓

app.js

↓

módulos

↓

Service Worker

---

# Base de datos

Supabase será el backend oficial.

Nunca almacenar información sensible en el navegador.

Toda validación importante ocurre en Supabase.

---

# Seguridad

Siempre utilizar:

- RLS
- Policies
- Validaciones
- Sanitización
- HTTPS
- Variables centralizadas

---

# Convenciones

Archivos

minúsculas

Ejemplo

app.js

helpers.js

config.js

---

Variables

camelCase

Ejemplo

userName

orderTotal

currentUser

---

Constantes

MAYÚSCULAS

Ejemplo

APP_NAME

VERSION

SUPABASE_URL

---

Funciones

Siempre descriptivas.

Ejemplo

loadMenu()

saveOrder()

loginUser()

calculateTotal()

---

# Versionado

v1.1.0

Migración GitHub Pages.

v1.2.0

Arquitectura modular.

v1.3.0

Dashboard.

v1.4.0

Inventario.

v1.5.0

Clientes VIP.

v2.0.0

Sistema profesional completo.

---

# Objetivo final

Construir la mejor PWA de una pizzería desarrollada únicamente con tecnologías gratuitas, manteniendo un código profesional, modular, seguro y preparado para crecer durante muchos años.
