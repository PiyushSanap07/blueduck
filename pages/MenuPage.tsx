import React, { useState } from 'react';
import { MENU_ITEMS } from '../constants';
import SEO from '../components/SEO';

const MenuPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'starters' | 'mains' | 'drinks'>('all');

  const filteredItems = activeCategory === 'all' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  const categories = [
    { id: 'all', label: 'All Items' },
    { id: 'starters', label: 'Starters' },
    { id: 'mains', label: 'Mains' },
    { id: 'drinks', label: 'Drinks' },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      <SEO 
        title="Full Menu"
        description="View our full menu of New American comfort food. Chicken Fried Steak, Ribeye, Burgers, and Craft Cocktails in Livingston, Texas."
        canonical="/menu"
      />
      <div className="bg-slate-900 pt-32 pb-20 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="relative z-10">
            <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6">Our Menu</h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto px-4 font-light tracking-wide">
            Featuring fresh ingredients and bold flavors. From our famous Chicken Fried Steak to craft cocktails.
            </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`px-8 py-3 rounded-sm text-sm font-bold tracking-widest uppercase transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-accent text-white shadow-lg transform -translate-y-1'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col sm:flex-row h-full">
              <div className="w-full sm:w-48 h-48 flex-shrink-0 overflow-hidden relative">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => (e.target as HTMLImageElement).src = `https://picsum.photos/400/400?random=${item.id}`}
                  />
                  {item.popular && (
                      <div className="absolute top-2 left-2 bg-accent text-white text-[10px] font-bold px-2 py-1 rounded shadow">
                          FAVORITE
                      </div>
                  )}
              </div>
              <div className="flex-grow p-6 flex flex-col justify-center">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-serif text-xl font-bold text-slate-900 leading-tight">{item.name}</h3>
                  <span className="font-bold text-accent text-lg ml-4 whitespace-nowrap">{item.price}</span>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Dietary Note */}
        <div className="mt-20 text-center border-t border-slate-200 pt-8">
          <p className="text-slate-500 text-xs uppercase tracking-wider mb-2">
              * Consuming raw or undercooked meats, poultry, seafood, shellfish, or eggs may increase your risk of foodborne illness.
          </p>
          <p className="text-slate-500 text-xs font-bold">Please inform your server of any allergies.</p>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;