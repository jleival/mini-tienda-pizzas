# 🍕 La Pizzería Mágica — Mini Tienda con React & Context API

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

Mini e-commerce interactivo de una pizzería desarrollado con **React**, **Vite** y **Bootstrap 5**. Este proyecto fue construido paso a paso con el objetivo de dominar el manejo de **Estado Global con Context API** (`createContext`, `Provider` y `useContext`) desde cero absoluto, evitando el *Prop Drilling*.

---

## 🚀 Características Principales

* **☁️ Estado Global Centralizado (`PizzaContext`):** Almacena el catálogo de pizzas y el estado del carrito en un único lugar accesible desde cualquier componente.
* **🍕 Catálogo Dinámico (`Catalogo`):** Renderiza las tarjetas de productos consumiendo los datos directamente desde el contexto.
* **🧢 Barra de Navegación en Tiempo Real (`Navbar`):** Calcula automáticamente la cantidad total de productos (`length`) y el monto total a pagar (`reduce`) cada vez que el carrito cambia.
* **🧺 Gestión Completa del Carrito (`Carrito`):** Permite visualizar el detalle del pedido, eliminar pizzas individuales (`filter`) o vaciar el carrito por completo.
* **🔍 Logs Educativos en Consola:** Incluye mensajes estratégicos con `console.log` para rastrear el flujo de datos y la reactividad del estado global.

---

## 📊 Arquitectura del Estado Global (Context API)

```text
             ☁️ [ NUBE MÁGICA (PizzaContext.jsx) ] ☁️
      Datos: menuPizzas, carrito
      Funciones: agregarAlCarrito, eliminarDelCarrito, vaciarCarrito
             /                     |                      \
            ▼                      ▼                       ▼
   🧢 [ Navbar.jsx ]      🍕 [ Catalogo.jsx ]     🧺 [ Carrito.jsx ]
   Lee: carrito           Lee: menuPizzas         Lee: carrito
   (Muestra total)        Usa: agregarAlCarrito   Usa: eliminar y vaciar
```

---

## 📁 Estructura del Proyecto

```text
mi-pizzeria/
├── src/
│   ├── components/
│   │   ├── Carrito.jsx       # Detalle del pedido, eliminar ítem y vaciar carrito
│   │   ├── Catalogo.jsx      # Listado de pizzas en tarjetas con botón de compra
│   │   └── Navbar.jsx        # Contador de pizzas y suma total en tiempo real
│   ├── context/
│   │   └── PizzaContext.jsx  # Creación del Contexto y Provider con estado global
│   ├── App.jsx               # Componente principal envuelto por <PizzaProvider>
│   └── main.jsx              # Punto de entrada e importación de Bootstrap CSS
├── package.json
└── vite.config.js
```

---

## 🛠️ Instalación y Ejecución Local

Sigue estos pasos para clonar y ejecutar el proyecto en tu computadora:

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/jleival/mini-tienda-pizzas.git
   ```

2. **Entrar a la carpeta del proyecto:**
   ```bash
   cd mini-tienda-pizzas
   ```

3. **Instalar las dependencias:**
   ```bash
   npm install
   ```

4. **Iniciar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

5. Abre tu navegador en `http://localhost:5173/` ¡y empieza a armar tu pedido de pizzas! 🍕

---

## 🧠 Conceptos de React Aplicados

* **Context API:** `createContext()`, `<Context.Provider value={{...}}>` y `useContext()`.
* **Hooks:** `useState()` para la reactividad del carrito de compras.
* **Inmutabilidad en JavaScript:** Uso del *Spread Operator* (`[...carrito, nuevaPizza]`) para agregar elementos y `.filter()` para eliminarlos sin mutar el estado original.
* **Renderizado Condicional:** Uso de operadores ternarios (`? :`) y cortocircuito lógico (`&&`) para mostrar estados de carrito vacío o botones de acción.

---

## 👤 Autor

Desarrollado por **[jleival](https://github.com/jleival)** — [Repositorio en GitHub](https://github.com/jleival/mini-tienda-pizzas.git)