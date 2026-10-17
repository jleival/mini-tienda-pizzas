import { PizzaProvider } from "./context/PizzaContext";
// 👇 1. Importamos nuestro nuevo componente Catalogo
import { Catalogo } from "./components/Catalogo";
// 👇 1. Importamos nuestra nueva Barra de Navegación
import { Navbar } from './components/Navbar';
// 👇 1. Importamos nuestro nuevo componente Carrito
import { Carrito } from './components/Carrito';

function App() {

  return (
    // 📡 ¡Aquí está el truco! Envolvemos toda nuestra tienda con <PizzaProvider>
    // ¡SÚPER IMPORTANTE!: <Catalogo /> DEBE estar ADENTRO de <PizzaProvider>
    // Si lo pones afuera del abrazo, el Walkie-Talkie no tendrá señal.
    //  Todo lo que pongamos aquí adentro tendrá acceso a las pizzas y al carrito.
    // ¡RECUERDA LA REGLA DE ORO!: <Navbar /> también debe ir ADENTRO de <PizzaProvider>
    <PizzaProvider>

      {/* 👇 2. Ponemos el Navbar arriba del todo */}
      <Navbar />

      <div className="container mt-5 text-center">
        <h1 className="display-4 fw-bold text-danger">
          🍕 La Pizzería Mágica
        </h1>
        <p className="lead text-secondary">
          ¡Nuestra nube mágica (Context) ya está encendida! Mira la consola.
        </p>

        {/* 👇 2. Colgamos el Catálogo aquí para que se vea en pantalla */}
        <Catalogo />

        {/* 👇 2. Colocamos el Carrito debajo del catálogo */}
        <Carrito />
      </div>
    </PizzaProvider>
  )
}

export default App