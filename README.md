# Learning WebSocket 💬

Este es un proyecto educativo y práctico diseñado específicamente con el enfoque de **reforzar y afianzar mis conocimientos en el protocolo WebSocket**, aplicando una arquitectura moderna de comunicación bidireccional en tiempo real utilizando **Node.js**, **Express** y **Socket.IO**.

##  Instalación y Configuración

Sigue estos pasos sencillos para clonar y preparar el proyecto en tu entorno local:

### Requisitos previos
*   Tener instalado [Node.js](https://nodejs.org/) (versión 18 o superior recomendada).
*   Tener instalado [Git](https://git-scm.com/).

### Paso 1: Clonar el repositorio
```bash
git clone https://github.com/ElvisLC/learning-websocket.git
cd learning-websocket
```

### Paso 2: Instalar las dependencias
Instala los paquetes necesarios definidos en el `package.json` (Express, Morgan y Socket.IO):
```bash
npm install
```

---

## 🚀 Uso en Entorno Local

Para iniciar el servidor de desarrollo local con recarga automática en caliente (`node --watch`):

```bash
npm run dev
```

Una vez que el servidor se esté ejecutando, abre tu navegador favorito e ingresa a:
👉 **[http://localhost:3000](http://localhost:3000)**

¡Puedes abrir múltiples pestañas o navegadores diferentes para probar el flujo de mensajes en tiempo real e interactuar en directo!

---

## 🌐 Despliegue en Producción

Para desplegar este proyecto en un entorno en la nube (como **Render**, **Railway**, o un servidor **VPS**):

1.  **Configurar Variables de Entorno:**
    *   Asegúrate de configurar la variable `PORT` en el panel de control de tu proveedor de hosting. El servidor de Node.js la tomará automáticamente o usará el puerto `3000` por defecto.
2.  **Comando de Inicio:**
    *   Para producción, el comando de arranque del servidor configurado en tu plataforma debe ejecutar el archivo principal:
    ```bash
    node server/index.js
    ```
3.  **Compatibilidad WebSockets:**
    *   Si usas servicios como Render o Railway, asegúrate de que el puerto de red mapeado soporte conexiones Websocket (comportamiento estándar en la actualidad).