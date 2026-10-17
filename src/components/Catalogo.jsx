// 1. Importamos nuestro "Walkie-Talkie" (useContext) desde React
import { useContext } from 'react';
// 2. Importamos el nombre de la señal que queremos sintonizar (PizzaContext)
import { PizzaContext } from '../context/PizzaContext';

export const Catalogo = () => {
    // 📻 ¡AQUÍ ESTÁ LA MAGIA! 
    // Sintonizamos la nube y sacamos "menuPizzas" directamente del aire.
    // 👇 1. Ahora sacamos DOS cosas de la nube: el menú Y la función agregarAlCarrito
    const { menuPizzas, agregarAlCarrito } = useContext(PizzaContext);
    console.log("📻 [CATÁLOGO] ¡Señal recibida desde la nube! Pizzas:", menuPizzas);

    // 🔍 CONSOLE.LOG EDUCATIVO #2:
    // Vamos a verificar que este componente recibió las pizzas sin que nadie se las pasara por cable:
    console.log("📻 [CATÁLOGO] ¡Señal recibida desde la nube! Pizzas:", menuPizzas);

    return (
        <div className="row mt-4">
            {/* 
        Usamos .map() que es como una máquina fotocopiadora:
        Toma cada "pizza" de la lista "menuPizzas" y le fabrica una tarjeta (card) de Bootstrap.
      */}
            {menuPizzas.map((pizza) => (
                <div className="col-md-4 mb-3" key={pizza.id}>
                    <div className="card shadow-sm h-100 border-danger">
                        <div className="card-body text-center">

                            {/* Mostramos el emoji gigante */}
                            <div className="display-1 mb-2">{pizza.emoji}</div>

                            {/* Mostramos el nombre de la pizza */}
                            <h5 className="card-title fw-bold">{pizza.nombre}</h5>

                            {/* Mostramos el precio */}
                            <p className="card-text fs-4 text-success fw-bold">
                                ${pizza.precio}
                            </p>

                            {/* 👇 2. Conectamos el evento onClick (al hacer clic) con nuestra función de la nube */}

                            {/* Botón de compra (En el Paso 4 le daremos vida a este botón) */}
                            <button 
                                className="btn btn-danger w-100"
                                onClick={() => agregarAlCarrito(pizza)}
                            >
                                🛒 Agregar al carrito
                            </button>

                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};