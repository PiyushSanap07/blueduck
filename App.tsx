import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ServicesPage from './pages/ServicesPage';
import { BUSINESS_INFO } from './constants';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Global Schema for the restaurant entity
const SchemaMarkup = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.text = JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Restaurant",
            "name": BUSINESS_INFO.name,
            "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
            "@id": "https://blueducklivingston.com",
            "url": "https://blueducklivingston.com",
            "telephone": BUSINESS_INFO.phone,
            "email": BUSINESS_INFO.email,
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "410 N Washington Ave",
                "addressLocality": "Livingston",
                "addressRegion": "TX",
                "postalCode": "77351",
                "addressCountry": "US"
            },
            "geo": {
                "@type": "GeoCoordinates",
                "latitude": BUSINESS_INFO.coords.lat,
                "longitude": BUSINESS_INFO.coords.lng
            },
            "priceRange": "$10-30",
            "servesCuisine": "New American",
            "openingHoursSpecification": [
                {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
                    "opens": "11:00",
                    "closes": "21:00"
                },
                {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Friday", "Saturday", "Sunday"],
                    "opens": "11:00",
                    "closes": "22:00"
                }
            ],
            "menu": "https://blueducklivingston.com/#/menu",
            "acceptsReservations": "true",
            "sameAs": [
                BUSINESS_INFO.socials.facebook,
                BUSINESS_INFO.socials.instagram
            ]
        });
        document.head.appendChild(script);

        return () => {
            // Clean up to prevent duplicate tags on re-renders
            if(document.head.contains(script)){
                document.head.removeChild(script);
            }
        };
    }, []);

    return null;
};

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <HashRouter>
        <SchemaMarkup />
        <div className="flex flex-col min-h-screen">
          <ScrollToTop />
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/menu" element={<MenuPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/services" element={<ServicesPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </HashRouter>
    </HelmetProvider>
  );
};

export default App;