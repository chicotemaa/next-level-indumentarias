import React, { useState } from 'react';
import { ShoppingBag, Heart, Menu, Search, User } from 'lucide-react';
import ProductCard from './components/ProductCard';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductDetail from './components/ProductDetail';
import { Product } from './types';

const products: Product[] = [
  {
    id: 1,
    name: 'Suéter de Algodón Oversized',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&q=80&w=600',
    category: 'Suéteres',
    description: 'Suéter oversized confeccionado en algodón premium. Perfecto para un look casual y cómodo.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Beige', 'Negro', 'Gris']
  },
  {
    id: 2,
    name: 'Pantalón Cargo de Talle Alto',
    price: 119.99,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80&w=600',
    category: 'Pantalones',
    description: 'Pantalón cargo de talle alto con múltiples bolsillos. Ideal para un look urbano y funcional.',
    sizes: ['36', '38', '40', '42', '44'],
    colors: ['Verde Militar', 'Negro', 'Beige']
  },
  {
    id: 3,
    name: 'Campera de Jean Corta',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?auto=format&fit=crop&q=80&w=600',
    category: 'Camperas',
    description: 'Campera de jean corta con lavado premium. Un básico renovado para tu guardarropa.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Azul Claro', 'Azul Oscuro', 'Negro']
  },
  {
    id: 4,
    name: 'Remera Básica Blanca',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=600',
    category: 'Remeras',
    description: 'Remera básica de algodón peinado. Corte regular y cuello redondo.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Blanco', 'Negro', 'Gris']
  },
];

function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);

  const handleAddToCart = (product: Product, size: string, color: string) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(
        item => item.id === product.id && item.selectedSize === size && item.selectedColor === color
      );

      if (existingItem) {
        return prevCart.map(item =>
          item === existingItem
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prevCart, {
        ...product,
        quantity: 1,
        selectedSize: size,
        selectedColor: color
      }];
    });

    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} cartItemCount={cart.length} />
      {!selectedProduct && <Hero />}
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {selectedProduct ? (
          <ProductDetail 
            product={selectedProduct} 
            onClose={() => setSelectedProduct(null)}
            onAddToCart={handleAddToCart}
          />
        ) : (
          <>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Colección Destacada</h2>
              <div className="flex gap-4">
                <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary-500">
                  Nuevos Ingresos
                </button>
                <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary-500">
                  Más Vendidos
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {products.map((product) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onSelect={() => setSelectedProduct(product)}
                />
              ))}
            </div>

            <div className="mt-16 bg-pastel-mint rounded-2xl p-8 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Unite a Nuestra Comunidad</h2>
              <p className="text-gray-600 mb-6">Obtené un 10% de descuento en tu primera compra y mantente actualizado con nuestras últimas colecciones</p>
              <div className="flex max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Ingresá tu email"
                  className="flex-1 px-4 py-3 rounded-l-lg border-2 border-r-0 border-gray-200 focus:outline-none focus:border-primary-500"
                />
                <button className="px-6 py-3 bg-primary-500 text-white rounded-r-lg hover:bg-primary-600 transition-colors">
                  Suscribirse
                </button>
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
}

export default App;