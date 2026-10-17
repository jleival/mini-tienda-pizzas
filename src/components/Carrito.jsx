import { useContext } from "react";
import { PizzaContext } from "../context/PizzaContext";

export const Carrito = () => {
    // 📻 Sintonizamos la nube y sacamos el carrito y las 2 funciones para borrar
    const { carrito, eliminarDelCarrito, vaciarCarrito } = useContext(PizzaContext);

    // 🔍 CONSOLE.LOG EDUCATIVO #5:
    console.log("🧺 [COMPONENTE CARRITO] Renderizando lista con", carrito.length, "elementos.");

    return (
        <div className="card mt-5 mb-5 shadow border-dark">
            <div className="card-header bg-dark text-white d-flex justify-content-between align-items-center">
                <h4 className="mb-0">🧺 Detalle de tu Pedido</h4>

                {/* Si hay al menos 1 pizza (carrito.length > 0), mostramos el botón de Vaciar */}
                {carrito.length > 0 && (
                    <button className="btn btn-outline-warning btn-sm" onClick={vaciarCarrito}>
                        🧹 Vaciar Carrito
                    </button>
                )}
            </div>
            <div className="card-body">
                {/* 
          PREGUNTA LÓGICA (Ternario): ¿El carrito tiene 0 pizzas? 
          - Si es verdad (?): Mostramos un mensaje triste.
          - Si es mentira (:): Dibujamos la lista de pizzas compradas.
        */}
                {carrito.length === 0 ? (
                    <p className="text-muted mb-0 py-3">
                        Tu carrito está vacío 🥺 ¡Agrega unas pizzas arriba!
                    </p>
                ) : (
                    <ul className="list-group">
                        {carrito.map((pizza, index) => (
                            <li
                                key={index}
                                className="list-group-item d-flex justify-content-between align-items-center"
                            >
                                <span className="fs-5">
                                    {pizza.emoji} <strong>{pizza.nombre}</strong> — <span className="text-success fw-bold">${pizza.precio}</span>
                                </span>
                                {/* Botón para eliminar esa pizza específica usando su posición (index) */}
                                <button
                                    className="btn btn-outline-danger btn-sm"
                                    onClick={() => eliminarDelCarrito(index)}
                                >
                                    ❌ Quitar
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}
