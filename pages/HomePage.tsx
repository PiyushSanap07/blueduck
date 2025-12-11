import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Award, ChefHat, Instagram, Clock, MapPin } from 'lucide-react';
import { MENU_ITEMS, REVIEWS, BUSINESS_INFO, GALLERY_IMAGES } from '../constants';
import SEO from '../components/SEO';

const Particles = () => {
  // Generate a stable set of random particles
  const [particles] = useState(() => 
    Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 3 + 1, // 1px to 4px
      duration: Math.random() * 20 + 10, // 10s to 30s
      delay: Math.random() * 5,
    }))
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute bg-white rounded-full opacity-30 animate-float"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            boxShadow: `0 0 ${p.size * 2}px rgba(255,255,255,0.8)`
          }}
        />
      ))}
    </div>
  );
};

const HomePage: React.FC = () => {
  const popularItems = MENU_ITEMS.filter(item => item.popular).slice(0, 3);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full overflow-x-hidden bg-primary">
      <SEO 
        title="Best Restaurant in Livingston TX"
        description="Experience The Blue Duck Kitchen & Bar. Historic Art Deco dining in Livingston, TX serving scratch-made American comfort food, craft cocktails, and the best Chicken Fried Steak in town."
        canonical="/"
      />

      {/* Aurora Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Blobs (Aurora Effect) */}
        <div className="absolute inset-0 w-full h-full bg-slate-900 overflow-hidden">
             {/* Subtler opacity for blobs to ensure text legibility */}
             <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-purple-600 rounded-full mix-blend-screen filter blur-[120px] opacity-25 animate-blob"></div>
             <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] bg-blue-600 rounded-full mix-blend-screen filter blur-[120px] opacity-25 animate-blob animation-delay-2000"></div>
             <div className="absolute -bottom-[20%] left-[20%] w-[60%] h-[60%] bg-emerald-600 rounded-full mix-blend-screen filter blur-[150px] opacity-20 animate-blob animation-delay-4000"></div>
             <div className="absolute top-[40%] left-[40%] w-[30%] h-[30%] bg-amber-500 rounded-full mix-blend-screen filter blur-[120px] opacity-15 animate-blob animation-delay-5000"></div>
             
             {/* Particles overlay */}
             <Particles />

             {/* Texture overlay */}
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
             <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-primary"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto animate-fade-in pt-20">
          <div className="flex justify-center mb-8">
             <div className="border border-white/20 bg-white/5 backdrop-blur-sm py-2 px-6 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                <span className="text-amber-400 font-bold tracking-[0.2em] uppercase text-xs">
                    Est. 2018 &bull; Livingston, Texas
                </span>
             </div>
          </div>
          
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-8 leading-none drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
            THE BLUE DUCK
          </h1>
          <h2 className="font-sans text-xl md:text-3xl font-light text-slate-300 mb-12 tracking-[0.2em] uppercase drop-shadow-md">
            Kitchen & Bar
          </h2>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              to="/menu" 
              className="w-full sm:w-auto min-w-[200px] bg-accent hover:bg-gold text-white px-8 py-4 rounded-sm font-bold tracking-widest uppercase text-sm transition-all duration-300 shadow-[0_0_30px_rgba(217,119,6,0.3)] hover:shadow-[0_0_40px_rgba(217,119,6,0.6)] hover:-translate-y-1"
            >
              View Menu
            </Link>
            <Link 
              to="/contact" 
              className="w-full sm:w-auto min-w-[200px] px-8 py-4 border border-white/30 hover:border-white text-white rounded-sm font-bold tracking-widest uppercase text-sm hover:bg-white/10 transition-all duration-300 backdrop-blur-sm shadow-lg"
            >
              Book a Table
            </Link>
          </div>
        </div>

        {/* Floating Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50">
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 13l5 5 5-5M7 6l5 5 5-5"/></svg>
        </div>
      </section>

      {/* Intro / Highlights */}
      <section className="py-24 bg-white relative z-20 rounded-t-[3rem] -mt-12 shadow-[0_-20px_60px_rgba(0,0,0,0.5)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-20">
                <h3 className="text-accent font-bold tracking-widest uppercase text-sm mb-4">Welcome to our table</h3>
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-8">Modern American Comfort with a Soulful Twist</h2>
                <p className="text-slate-600 text-lg leading-relaxed">
                    Housed in a beautifully preserved 1920s Art Deco building, we bring a touch of historic elegance to your dining experience. 
                    From our famous "tower" Chicken Fried Steak to our hand-crafted cocktails, every detail is designed to delight.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="bg-cream p-10 rounded-2xl text-center hover:-translate-y-2 transition-transform duration-500 shadow-sm hover:shadow-xl border border-slate-100">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md text-accent">
                        <Award size={32} />
                    </div>
                    <h4 className="font-serif text-2xl font-bold text-slate-900 mb-3">Top Rated</h4>
                    <p className="text-slate-500">Consistently rated 4.4+ stars. A local favorite for quality and atmosphere.</p>
                </div>
                <div className="bg-cream p-10 rounded-2xl text-center hover:-translate-y-2 transition-transform duration-500 shadow-sm hover:shadow-xl border border-slate-100">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md text-accent">
                        <ChefHat size={32} />
                    </div>
                    <h4 className="font-serif text-2xl font-bold text-slate-900 mb-3">Scratch Kitchen</h4>
                    <p className="text-slate-500">Nothing frozen, everything fresh. Hand-battered, house-made sauces, and premium cuts.</p>
                </div>
                <div className="bg-cream p-10 rounded-2xl text-center hover:-translate-y-2 transition-transform duration-500 shadow-sm hover:shadow-xl border border-slate-100">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md text-accent">
                        <Star size={32} />
                    </div>
                    <h4 className="font-serif text-2xl font-bold text-slate-900 mb-3">Unique Vibe</h4>
                    <p className="text-slate-500">Industrial Art Deco architecture meets a warm, inclusive, and vibrant community atmosphere.</p>
                </div>
            </div>
        </div>
      </section>

      {/* Featured Menu Parallax */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div>
                <span className="text-accent font-bold tracking-widest uppercase text-sm">Taste the difference</span>
                <h2 className="font-serif text-5xl md:text-6xl font-bold text-slate-900 mt-2">Local Favorites</h2>
            </div>
            <Link to="/menu" className="group inline-flex items-center text-slate-800 font-bold hover:text-accent transition-colors">
                View Full Menu 
                <span className="bg-slate-200 group-hover:bg-accent group-hover:text-white rounded-full p-2 ml-3 transition-colors">
                    <ArrowRight size={16} />
                </span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {popularItems.map((item) => (
              <div key={item.id} className="group relative h-[500px] rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500">
                <img 
                    src={item.image} 
                    alt={item.name} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex justify-between items-center mb-4">
                        <span className="bg-white/20 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-white/20">Popular</span>
                        <span className="text-accent font-serif font-bold text-2xl">{item.price}</span>
                    </div>
                    <h3 className="font-serif text-3xl font-bold text-white mb-2 leading-tight">{item.name}</h3>
                    <p className="text-slate-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 line-clamp-2">
                        {item.description}
                    </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Masonry Gallery */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
         <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-accent/5 rounded-full blur-[100px]"></div>
         
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <div className="flex flex-col md:flex-row justify-between items-end mb-16">
              <div className="max-w-xl">
                  <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">A Feast for the Senses</h2>
                  <p className="text-slate-400">
                    From our kitchen to your feed. Tag us <span className="text-accent">@blueducklivingston</span>
                  </p>
              </div>
              <div className="flex gap-4 mt-6 md:mt-0">
                <a href={BUSINESS_INFO.socials.facebook} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
                <a href={BUSINESS_INFO.socials.instagram} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all">
                    <Instagram size={20} />
                </a>
              </div>
           </div>

           <div className="columns-2 md:columns-4 gap-4 space-y-4">
              {GALLERY_IMAGES.map((img, idx) => (
                  <div key={img.id} className="relative group break-inside-avoid rounded-xl overflow-hidden transform transition-all duration-300 hover:z-10 cursor-zoom-in">
                      <img 
                        src={img.url} 
                        alt={img.alt} 
                        className="w-full object-cover transition-transform duration-700 group-hover:scale-110" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                          <span className="text-white font-medium text-sm">{img.alt}</span>
                      </div>
                  </div>
              ))}
           </div>
        </div>
      </section>

      {/* Reviews Carousel Style */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between mb-16">
                 <div>
                    <h2 className="font-serif text-4xl font-bold text-slate-900">Guest Love</h2>
                    <div className="flex items-center gap-2 mt-2">
                        <div className="flex text-amber-400">
                            {[...Array(5)].map((_,i) => <Star key={i} size={20} fill="currentColor" />)}
                        </div>
                        <span className="font-bold text-slate-700">4.4 / 5.0 Rating</span>
                    </div>
                 </div>
                 <div className="mt-6 md:mt-0">
                    <a href="https://www.google.com/maps" target="_blank" rel="noreferrer" className="px-6 py-3 bg-white border border-slate-200 rounded-full hover:shadow-lg transition-all text-sm font-bold text-slate-700">
                        Read on Google
                    </a>
                 </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 {REVIEWS.map((review, i) => (
                     <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-slate-100 relative mt-8 md:mt-0 flex flex-col">
                         <div className="absolute -top-6 left-8">
                             <div className="bg-slate-900 text-white w-12 h-12 flex items-center justify-center rounded-full text-2xl font-serif shadow-lg">"</div>
                         </div>
                         <p className="text-slate-600 text-lg leading-relaxed mb-6 pt-4 flex-grow italic">
                             {review.text}
                         </p>
                         <div className="flex items-center gap-4 border-t border-slate-100 pt-4">
                             <div className="w-10 h-10 bg-gradient-to-br from-accent to-gold rounded-full flex items-center justify-center font-bold text-white shadow-md">
                                 {review.author.charAt(0)}
                             </div>
                             <div>
                                 <h5 className="font-bold text-slate-900 text-sm">{review.author}</h5>
                                 <span className="text-xs text-slate-400">{review.date}</span>
                             </div>
                         </div>
                     </div>
                 ))}
            </div>
        </div>
      </section>

      {/* Large CTA Map */}
      <section className="relative w-full bg-slate-900 flex flex-col md:flex-row shadow-2xl z-30">
        <div className="w-full md:w-3/5 h-[600px] relative z-0">
            <iframe 
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3435.532321235123!2d${BUSINESS_INFO.coords.lng}!3d${BUSINESS_INFO.coords.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8638867f84e21283%3A0x693415db91d4d23a!2sThe%20Blue%20Duck%20Kitchen%20%26%20Bar!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus`}
                width="100%" 
                height="100%" 
                style={{border:0}} 
                loading="lazy" 
                title="Google Maps Location"
                className="filter grayscale hover:grayscale-0 transition-all duration-500 opacity-90 hover:opacity-100"
            ></iframe>
            {/* Overlay Gradient for smooth transition */}
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-900 to-transparent hidden md:block pointer-events-none"></div>
        </div>
        
        <div className="w-full md:w-2/5 bg-slate-900 flex items-center justify-center p-12 text-center md:text-left relative overflow-hidden">
            {/* Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-[80px]"></div>
            
            <div className="max-w-md relative z-10">
                <h2 className="font-serif text-4xl font-bold text-white mb-6">Find Us Downtown</h2>
                <div className="space-y-6 text-slate-300 mb-10">
                    <div className="flex items-start justify-center md:justify-start gap-4">
                        <div className="bg-white/10 p-3 rounded-full">
                            <MapPin className="text-accent" />
                        </div>
                        <div>
                            <p className="font-bold text-white">Location</p>
                            <p className="text-sm">{BUSINESS_INFO.address}</p>
                        </div>
                    </div>
                    <div className="flex items-start justify-center md:justify-start gap-4">
                        <div className="bg-white/10 p-3 rounded-full">
                            <Clock className="text-accent" />
                        </div>
                        <div>
                            <p className="font-bold text-white">Hours</p>
                            <p className="text-sm">{BUSINESS_INFO.hours.weekdays}</p>
                            <p className="text-sm">{BUSINESS_INFO.hours.weekends}</p>
                        </div>
                    </div>
                </div>
                <Link to="/contact" className="inline-block w-full text-center bg-white text-slate-900 font-bold px-8 py-4 rounded-sm hover:bg-accent hover:text-white transition-all shadow-lg hover:shadow-accent/50">
                    Get Directions
                </Link>
            </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;