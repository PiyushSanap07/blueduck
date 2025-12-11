import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  type?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, canonical, type = 'website' }) => {
  const siteName = 'The Blue Duck Kitchen & Bar';
  const fullTitle = `${title} | ${siteName}`;
  const baseUrl = 'https://blueducklivingston.com'; // Replace with actual domain in production
  const currentUrl = canonical ? `${baseUrl}${canonical}` : baseUrl;

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{fullTitle}</title>
      <meta name='description' content={description} />
      <link rel="canonical" href={currentUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:image" content="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80" />
      
      {/* Local SEO specifics */}
      <meta name="geo.region" content="US-TX" />
      <meta name="geo.placename" content="Livingston" />
      <meta name="geo.position" content="30.7114;-94.9327" />
      <meta name="ICBM" content="30.7114, -94.9327" />
    </Helmet>
  );
};

export default SEO;