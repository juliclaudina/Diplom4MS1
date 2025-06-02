import { useState } from "react";

const destinos = [
  {
    id: 1,
    nombre: "Fiambalá",
    descripcion: "Famoso por sus termas naturales y paisajes desérticos.",
  },
  {
    id: 2,
    nombre: "Antofagasta de la Sierra",
    descripcion: "Paisajes volcánicos únicos en la puna catamarqueña.",
  },
  {
    id: 3,
    nombre: "El Rodeo",
    descripcion: "Villa turística rodeada de sierras y vegetación.",
  },
];

const Portada = () => {
  const [mostrarDestinos, setMostrarDestinos] = useState(false);

  const toggleDestinos = () => {
    setMostrarDestinos(!mostrarDestinos);
  };

  return (
    <section
      className="bg-cover bg-center bg-fixed min-h-screen text-white px-8 py-16"
      style={{ backgroundImage: `url('/fondo_CampoPiedraPomez.jpg')` }}
    >
      <div className="max-w-5xl mx-auto text-center font-sans">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Descubrí Catamarca
        </h1>
        <p className="text-lg md:text-xl mb-6 font-semibold bg-gray-900/70 px-4 py-2 rounded">
  Conocé la riqueza natural y cultural de esta hermosa provincia del norte argentino.
</p>

        <button
          onClick={toggleDestinos}
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-full shadow-md transition duration-300"
        >
          {mostrarDestinos ? "Ocultar destinos" : "Ver destinos"}
        </button>

        {mostrarDestinos && (
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {destinos.map((destino) => (
              <div
                key={destino.id}
                className="bg-gray-200 p-6 rounded-lg shadow-md hover:bg-gray-300 transition"
              >
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  {destino.nombre}
                </h2>
                <p className="text-black">{destino.descripcion}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Portada;
