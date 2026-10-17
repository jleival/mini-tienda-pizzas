// 1. Importamos dos herramientas de React:
// - createContext: Para fabricar la nube mágica.
// - useState: Para guardar datos que pueden cambiar (como el carrito).
import { createContext, useState } from "react";

// 2. ¡Aquí nace la Nube Mágica! La exportamos para que otros archivos puedan verla.
export const PizzaContext = createContext();

// 3. Creamos la "Antena Transmisora" (El Provider).
// Fíjate en "{ children }": "children" significa "los hijos". 
// Representa a TODAS las pantallas que vamos a meter adentro de esta antena más adelante.
export const PizzaProvider = ({ children }) => {
    // 📋 DATO 1: Nuestro menú de pizzas (lista fija de objetos)
    const menuPizzas = [
        { id: 1, nombre: 'Pizza Margarita', precio: 10, emoji: '🧀' },
        { id: 2, nombre: 'Pizza Pepperoni', precio: 12, emoji: '🍕' },
        { id: 3, nombre: 'Pizza Hawaiana', precio: 11, emoji: '🍍' }
    ];
    // 🛒 DATO 2: Nuestro carrito de compras.
    // Usamos useState([]) porque al principio el carrito es una lista vacía [].
    const [carrito, setCarrito] = useState([]);

    // 🔍 CONSOLE.LOG EDUCATIVO #1:
    // Cada vez que la nube se encienda o el carrito cambie, veremos esto en la consola:
    console.log("☁️ [NUBE MÁGICA ACTIVA] Menú disponible:", menuPizzas);
    console.log("🛒 [ESTADO DEL CARRITO]:", carrito);

    // 👇 NUEVO EN EL PASO 4: Nuestro robot ayudante para meter pizzas al carrito
    // 🔍 CONSOLE.LOG EDUCATIVO #3:
    const agregarAlCarrito = (pizzaElegida) => {
        console.log("🚀 [ACCIÓN] ¡El usuario hizo clic! Subiendo a la nube:", pizzaElegida.nombre);
        // Creamos la canasta nueva copiando lo viejo (...carrito) + la pizzaElegida
        setCarrito([...carrito, pizzaElegida]);
    };

    // 👇 NUEVO - Superpoder 2: Eliminar una pizza según su posición (índice) en la fila
    const eliminarDelCarrito = (indiceABorrar) => {
        console.log("🗑️ [ACCIÓN] Quitando la pizza en la posición:", indiceABorrar);

        // Dejamos pasar a todas las pizzas cuyo "index" sea DIFERENTE (!==) al que queremos borrar
        const nuevoCarrito = carrito.filter((pizza, index) => index !== indiceABorrar);
        setCarrito(nuevoCarrito);
    };

    // 👇 NUEVO - Superpoder 3: Vaciar todo el carrito
    const vaciarCarrito = () => {
        console.log("🧹 [ACCIÓN] ¡Vaciando todo el carrito en la nube!");
        setCarrito([]);
    };
    console.log("🛒 [ESTADO DEL CARRITO ACTUAL]:", carrito);

    console.log("☁️ [NUBE MÁGICA ACTIVA] Menú disponible:", menuPizzas);
    console.log("🛒 [ESTADO DEL CARRITO ACTUAL]:", carrito);

    // 4. Retornamos el "abrazo" de la antena.
    // En "value={{ menuPizzas, carrito }}" metemos dentro de una bolsita todo lo que 
    // queremos regalarle al resto de la aplicación.
    return (
        // 👇 ¡OJO AQUÍ! Agregamos "agregarAlCarrito" a la bolsita de regalos (value)
        // Si no lo ponemos aquí, los componentes no sabrán que esta función existe.
        // 👇 Metemos las nuevas funciones en la bolsita de regalos (value)
        <PizzaContext.Provider
            value={{
                menuPizzas,
                carrito,
                agregarAlCarrito,
                eliminarDelCarrito,
                vaciarCarrito
            }}>
            {children}
        </PizzaContext.Provider>
    );
};
