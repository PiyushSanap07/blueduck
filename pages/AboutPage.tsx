import React from 'react';
import { Heart, ShieldCheck, MapPin } from 'lucide-react';
import SEO from '../components/SEO';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-cream min-h-screen">
      <SEO 
        title="About Us - Our Story"
        description="Learn about the history of The Blue Duck. A Latino-owned, LGBTQ+ friendly restaurant located in the heart of downtown Livingston, TX."
        canonical="/about"
      />
      {/* Header */}
      <div className="relative pt-32 pb-20 bg-primary text-white text-center">
         <h1 className="font-serif text-5xl font-bold mb-4">Our Story</h1>
         <div className="h-1 w-20 bg-accent mx-auto"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* The Building */}
        <div className="mb-16 animate-fade-in">
           <h2 className="font-serif text-3xl font-bold text-primary mb-6">The Art Deco Jewel of Livingston</h2>
           <p className="text-lg text-slate-700 leading-relaxed mb-6">
             The Blue Duck Kitchen & Bar isn't just a restaurant; it's a piece of Livingston's history. Housed in a striking Art Deco building, our space exudes the charm and elegance of the 1920s and 30s, carefully restored to create a vibrant, modern dining atmosphere.
           </p>
           <img src="https://picsum.photos/1000/500?grayscale" alt="Historic Building" className="w-full rounded-lg shadow-lg mb-8" />
           <p className="text-slate-600 leading-relaxed">
             We believe that the environment is just as important as the food. The high ceilings, geometric details, and warm lighting create a backdrop that makes every meal feel like a special occasion, whether it's a Tuesday lunch or a Saturday night celebration.
           </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
           <div className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-accent">
              <div className="flex items-center mb-4">
                  <ShieldCheck className="text-accent w-6 h-6 mr-3" />
                  <h3 className="font-serif text-xl font-bold text-primary">Inclusivity at Heart</h3>
              </div>
              <p className="text-slate-600">
                We are proud to be an LGBTQ+ friendly establishment. We strive to create a safe, welcoming space where everyone in our community feels respected and valued.
              </p>
           </div>
           <div className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-accent">
              <div className="flex items-center mb-4">
                  <Heart className="text-accent w-6 h-6 mr-3" />
                  <h3 className="font-serif text-xl font-bold text-primary">Community Rooted</h3>
              </div>
              <p className="text-slate-600">
                Identifies as Latino-owned, we bring a passion for hospitality and family values to everything we do. We are committed to supporting local suppliers and being an active part of Livingston.
              </p>
           </div>
        </div>

        {/* Location Info Block */}
        <div className="bg-slate-200 p-8 rounded-xl flex items-start">
            <MapPin className="text-primary w-8 h-8 mr-4 flex-shrink-0" />
            <div>
                <h3 className="font-bold text-primary text-lg mb-2">Visit Us</h3>
                <p className="text-slate-700">
                    Located in the heart of downtown.<br/>
                    410 N Washington Ave, Livingston, TX 77351
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;