// 1. Importamos nuestro Walkie-Talkie (useContext) y la señal de la nube (PizzaContext)
import { useContext } from "react";
import { PizzaContext } from '../context/PizzaContext';

export const Navbar = () => {
    // 📻 Sintonizamos la nube, pero aquí SOLO nos interesa sacar el "carrito"
    const { carrito } = useContext(PizzaContext);

    // 🧮 CAJA REGISTRADORA: Sumamos el precio de todas las pizzas en el carrito.
    // "acumulador" empieza en 0, y por cada "pizza" le suma su "pizza.precio".
    const totalPagar = carrito.reduce((acumulador, pizza) => acumulador + pizza.precio, 0);

    // 🔍 CONSOLE.LOG EDUCATIVO #4:
    console.log(
        `🧢 [NAVBAR] Actualizado -> Cantidad: ${carrito.length} pizzas | Total: $${totalPagar}`
    );

    return (
        <nav className="navbar navbar-dark bg-dark shadow-sm mb-4 mb-3">
            <div className="container d-flex justify-content-between align-items-center">

                {/* Lado izquierdo: Logo de la tienda */}
                <span className="navbar-brand fw-bold fs-4">
                    🍕 Pizzería Don Contexto
                </span>

                {/* Lado derecho: Contador en vivo conectado a la nube */}
                <div className="bg-warning text-dark px-3 py-2 rounded-pill">
                    🛒 Pizzas: <span className="badge bg-danger">{carrito.length}</span>
                    {' | '}
                    Total: ${totalPagar}
                </div>

            </div>
        </nav>
    )
}


