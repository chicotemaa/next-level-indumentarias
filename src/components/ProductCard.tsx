import React from 'react';
import { Heart } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  sizes: string[];
  colors: string[];
}

interface ProductCardProps {
  product: Product;
  onSelect: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onSelect }) => {
  return (
    <div className="group relative">
      <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover object-center group-hover:opacity-75 transition-opacity cursor-pointer"
          onClick={onSelect}
        />
        <button className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white text-gray-600 hover:text-primary-500 transition-colors">
          <Heart size={20} />
        </button>
      </div>
      <div className="mt-4">
        <div className="flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700 cursor-pointer hover:text-primary-500" onClick={onSelect}>
              {product.name}
            </h3>
            <p className="mt-1 text-sm text-gray-500">{product.category}</p>
          </div>
          <p className="text-sm font-medium text-gray-900">${product.price}</p>
        </div>
        <button className="mt-4 w-full bg-pastel-peach text-gray-900 py-2 rounded-lg hover:bg-primary-500 hover:text-white transition-colors">
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
};

export default ProductCard;