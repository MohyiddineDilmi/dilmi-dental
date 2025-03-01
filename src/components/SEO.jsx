import React from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';

// Helper function to get the hreflang format from the language code
const getHreflang = (language) => {
  switch (language) {
    case 'en':
      return 'en-us'; // Changed from fr-dz to en-us
    case 'ar':
      return 'ar-dz';
    default:
      return 'en-us'; // Default to English instead of French
  }
};

/**
 * SEO component that sets meta tags and other SEO-related elements in the document head
 */
const SEO = ({
  title,
  description,
  canonicalUrl = 'https://www.dilmidental.com',
  imageUrl = 'https://www.dilmidental.com/dilmi_dental_social.jpg',
  schema = null,
}) => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  
  // If no title or description provided, use the ones from translations
  const siteTitle = title || t('seo.title');
  const siteDescription = description || t('seo.description');
  
  // Current page URL considering the language
  const currentUrl = `${canonicalUrl}${currentLanguage !== 'en' ? `/${currentLanguage}` : ''}`;
  
  // Alternative URLs for language versions
  const alternateUrls = {
    en: canonicalUrl,
    ar: `${canonicalUrl}/ar`,
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <html lang={currentLanguage} />
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
      <meta name="keywords" content={t('seo.keywords')} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={currentUrl} />
      
      {/* Language Alternates - hreflang */}
      <link rel="alternate" hreflang="en-us" href={alternateUrls.en} />
      <link rel="alternate" hreflang="ar-dz" href={alternateUrls.ar} />
      <link rel="alternate" hreflang="x-default" href={alternateUrls.en} /> {/* Default is now English */}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:locale" content={currentLanguage === 'ar' ? 'ar_DZ' : 'en_US'} /> {/* Changed from fr_DZ to en_US */}
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDescription} />
      <meta name="twitter:image" content={imageUrl} />
      
      {/* Geo Tags */}
      <meta name="geo.region" content="DZ" />
      <meta name="geo.placename" content={t('seo.address.locality')} />
      
      {/* Schema.org structured data */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO; 