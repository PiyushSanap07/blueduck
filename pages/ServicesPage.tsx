import React from 'react';
import { SERVICES } from '../constants';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const ServicesPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <SEO 
        title="Services & Private Events"
        description="Host your next event at The Blue Duck. We offer private dining, live music, and a full bar in our historic Livingston venue."
        canonical="/services"
      />
       <div className="bg-slate-900 pt-32 pb-20 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')]"></div>
          <h1 className="relative font-serif text-5xl md:text-6xl font-bold mb-4">Services & Experience</h1>
          <p className="relative text-lg text-slate-300 max-w-2xl mx-auto px-4">
            More than just food, we provide an unforgettable atmosphere for every occasion.
          </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {SERVICES.map((service, index) => (
                <div key={service.id} className={`flex flex-col md:flex-row items-center md:items-start gap-6 p-8 rounded-xl transition-all duration-300 hover:shadow-xl ${index % 2 === 0 ? 'bg-cream' : 'bg-white border border-slate-100'}`}>
                    <div className="bg-accent p-4 rounded-full shadow-lg flex-shrink-0">
                        {service.icon}
                    </div>
                    <div className="text-center md:text-left">
                        <h3 className="font-serif text-2xl font-bold text-primary mb-3">{service.title}</h3>
                        <p className="text-slate-600 leading-relaxed">{service.description}</p>
                    </div>
                </div>
            ))}
        </div>

        {/* Private Events Highlight */}
        <div className="mt-20 bg-primary rounded-2xl overflow-hidden shadow-2xl">
            <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 h-64 md:h-auto relative">
                    <img src="https://picsum.photos/800/800?random=15" alt="Event Space" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-accent/20"></div>
                </div>
                <div className="md:w-1/2 p-12 flex flex-col justify-center">
                    <h3 className="text-accent font-bold tracking-widest uppercase mb-2">Private Dining</h3>
                    <h2 className="font-serif text-3xl md:text-4xl text-white font-bold mb-6">Host Your Next Event With Us</h2>
                    <p className="text-slate-300 mb-8 leading-relaxed">
                        From birthday celebrations to corporate dinners, our historic art-deco space provides the perfect backdrop. We offer custom menu options to suit your party's needs.
                    </p>
                    <Link to="/contact" className="inline-block bg-white text-primary hover:bg-accent hover:text-white px-8 py-3 rounded font-bold transition-colors w-fit">
                        Inquire Now
                    </Link>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;