import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';
import SEO from '../components/SEO';

const ContactPage: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white">
       <SEO 
        title="Contact Us & Reservations"
        description="Book a table at The Blue Duck Kitchen & Bar. Call us at 936-327-2385 or visit us at 410 N Washington Ave, Livingston, TX."
        canonical="/contact"
      />
       {/* Header */}
       <div className="bg-primary pt-32 pb-20 text-center text-white relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
         <h1 className="relative font-serif text-5xl md:text-6xl font-bold mb-4">Get in Touch</h1>
         <p className="relative text-slate-300 text-lg">Reservations, private events, or just to say hello.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info & Large Map */}
          <div>
            <h2 className="font-serif text-3xl font-bold text-primary mb-8">Contact Information</h2>
            
            <div className="space-y-8 mb-12">
               <div className="flex items-start group">
                  <div className="bg-accent/10 p-4 rounded-full mr-5 group-hover:bg-accent/20 transition-colors">
                    <MapPin className="text-accent w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 text-lg">Address</h3>
                    <p className="text-slate-600">{BUSINESS_INFO.address}</p>
                  </div>
               </div>
               
               <div className="flex items-start group">
                  <div className="bg-accent/10 p-4 rounded-full mr-5 group-hover:bg-accent/20 transition-colors">
                    <Phone className="text-accent w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 text-lg">Phone</h3>
                    <p className="text-slate-600 mb-1">{BUSINESS_INFO.phone}</p>
                    <a href={`tel:${BUSINESS_INFO.phone}`} className="text-accent font-semibold hover:underline text-sm uppercase tracking-wide">Call to Reserve</a>
                  </div>
               </div>

               <div className="flex items-start group">
                  <div className="bg-accent/10 p-4 rounded-full mr-5 group-hover:bg-accent/20 transition-colors">
                    <Mail className="text-accent w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 text-lg">Email</h3>
                    <p className="text-slate-600">{BUSINESS_INFO.email}</p>
                  </div>
               </div>
            </div>

            {/* Enlarged Map */}
            <div className="h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <iframe 
                    src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3435.532321235123!2d${BUSINESS_INFO.coords.lng}!3d${BUSINESS_INFO.coords.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8638867f84e21283%3A0x693415db91d4d23a!2sThe%20Blue%20Duck%20Kitchen%20%26%20Bar!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus`}
                    width="100%" 
                    height="100%" 
                    style={{border:0}} 
                    loading="lazy" 
                    title="Map"
                    className="filter grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                ></iframe>
            </div>
          </div>

          {/* Form */}
          <div className="bg-cream p-8 md:p-12 rounded-2xl shadow-lg h-fit border border-slate-100">
            <h2 className="font-serif text-3xl font-bold text-primary mb-6">Send a Message</h2>
            
            {formStatus === 'success' ? (
                <div className="bg-green-100 border border-green-400 text-green-700 px-6 py-8 rounded-xl text-center" role="alert">
                    <div className="w-16 h-16 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Send size={32} className="text-green-600" />
                    </div>
                    <strong className="font-bold text-xl block mb-2">Message Sent!</strong>
                    <span className="block"> Thank you for reaching out. We will get back to you shortly.</span>
                    <button onClick={() => setFormStatus('idle')} className="mt-6 text-green-700 font-bold hover:underline">Send another</button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2">Name</label>
                    <input type="text" id="name" required placeholder="Your full name" className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all bg-white" />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2">Email</label>
                    <input type="email" id="email" required placeholder="john@example.com" className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all bg-white" />
                </div>
                <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-slate-700 mb-2">Phone (Optional)</label>
                    <input type="tel" id="phone" placeholder="(555) 123-4567" className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all bg-white" />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                    <textarea id="message" rows={5} required placeholder="Tell us about your event or question..." className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all bg-white"></textarea>
                </div>
                <button 
                    type="submit" 
                    disabled={formStatus === 'submitting'}
                    className="w-full bg-accent hover:bg-gold text-white font-bold py-4 px-6 rounded-lg transition-all flex justify-center items-center disabled:opacity-50 shadow-lg hover:shadow-accent/40 transform hover:-translate-y-1"
                >
                    {formStatus === 'submitting' ? 'Sending...' : <><Send size={18} className="mr-2" /> Send Message</>}
                </button>
                </form>
            )}
            
            <div className="mt-12 pt-8 border-t border-slate-200">
               <h3 className="font-serif font-bold text-lg mb-6">Frequently Asked Questions</h3>
               <div className="space-y-4">
                  <details className="group bg-white rounded-lg border border-slate-200">
                      <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4 text-slate-700 hover:text-accent transition-colors">
                          <span>Do you take reservations?</span>
                          <span className="transition-transform duration-300 group-open:rotate-180">
                              <svg fill="none" height="20" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20"><path d="M6 9l6 6 6-6"></path></svg>
                          </span>
                      </summary>
                      <div className="text-slate-600 px-4 pb-4 pt-0 text-sm leading-relaxed">
                          Yes! We recommend reservations for dinner and weekend service. You can call us at {BUSINESS_INFO.phone}.
                      </div>
                  </details>
                  <details className="group bg-white rounded-lg border border-slate-200">
                      <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4 text-slate-700 hover:text-accent transition-colors">
                          <span>Are you pet friendly?</span>
                          <span className="transition-transform duration-300 group-open:rotate-180">
                              <svg fill="none" height="20" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20"><path d="M6 9l6 6 6-6"></path></svg>
                          </span>
                      </summary>
                      <div className="text-slate-600 px-4 pb-4 pt-0 text-sm leading-relaxed">
                          Service animals are always welcome. Our outdoor patio is pet-friendly for well-behaved leashed dogs.
                      </div>
                  </details>
                  <details className="group bg-white rounded-lg border border-slate-200">
                      <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4 text-slate-700 hover:text-accent transition-colors">
                          <span>Is there parking available?</span>
                          <span className="transition-transform duration-300 group-open:rotate-180">
                              <svg fill="none" height="20" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20"><path d="M6 9l6 6 6-6"></path></svg>
                          </span>
                      </summary>
                      <div className="text-slate-600 px-4 pb-4 pt-0 text-sm leading-relaxed">
                          Yes, there is street parking available along Washington Ave and surrounding streets.
                      </div>
                  </details>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;