import React from 'react';
import { ShoppingBag, Heart, Menu, Search, User, X } from 'lucide-react';

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  cartItemCount: number;
}

const Navbar: React.FC<NavbarProps> = ({ isMenuOpen, setIsMenuOpen, cartItemCount }) => {
  return (
    <nav className="bg-white shadow-sm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <button 
              className="p-2 rounded-md text-gray-600 lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <div className="hidden lg:flex items-center space-x-8 ml-8">
              <a href="#" className="text-gray-700 hover:text-primary-500">Novedades</a>
              <a href="#" className="text-gray-700 hover:text-primary-500">Ropa</a>
              <a href="#" className="text-gray-700 hover:text-primary-500">Accesorios</a>
              <a href="#" className="text-gray-700 hover:text-primary-500">Ofertas</a>
            </div>
          </div>

          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-2xl font-bold text-primary-500">Next Level</h1>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-md text-gray-600 hover:text-primary-500">
              <Search size={20} />
            </button>
            <button className="p-2 rounded-md text-gray-600 hover:text-primary-500">
              <User size={20} />
            </button>
            <button className="p-2 rounded-md text-gray-600 hover:text-primary-500">
              <Heart size={20} />
            </button>
            <button className="p-2 rounded-md text-gray-600 hover:text-primary-500 relative">
              <ShoppingBag size={20} />
              <span className="absolute top-0 right-0 h-4 w-4 bg-primary-500 rounded-full text-xs text-white flex items-center justify-center">
                {cartItemCount}
              </span>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-white shadow-lg z-50">
          <div className="px-4 py-6 space-y-4">
            <a href="#" className="block text-gray-700 hover:text-primary-500 py-2">Novedades</a>
            <a href="#" className="block text-gray-700 hover:text-primary-500 py-2">Ropa</a>
            <a href="#" className="block text-gray-700 hover:text-primary-500 py-2">Accesorios</a>
            <a href="#" className="block text-gray-700 hover:text-primary-500 py-2">Ofertas</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;