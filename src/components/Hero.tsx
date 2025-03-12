
const Hero = () => {
  return (
    <div className="relative bg-pastel-lavender">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Descubrí Tu Estilo
              <span className="block text-primary-500">Elevá Tu Guardarropa</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Explorá nuestra última colección de ropa trendy y cómoda que te ayuda a expresar tu estilo único.
            </p>
            <div className="flex gap-4">
              <button className="px-8 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors">
                Comprar Ahora
              </button>
              <button className="px-8 py-3 border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-900 hover:text-white transition-colors">
                Nuevos Ingresos
              </button>
            </div>
          </div>
          <div className="relative h-96 lg:h-[600px]">
            <img
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=1000"
              alt="Modelo de Moda"
              className="absolute inset-0 w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;