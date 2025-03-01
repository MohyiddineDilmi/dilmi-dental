import React from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

const SEO = ({ 
  title, 
  description, 
  canonicalUrl = 'https://dilmidental.dz',
  image = '/dilmi_dental_preview.jpg',
  schemaType = 'Dentist'
}) => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  
  // Dynamic title and description based on language
  const siteTitle = title ? `${title} | Dilmi Dental` : t('seo.title');
  const siteDescription = description || t('seo.description');
  
  // Location data for the clinic in Algeria
  const clinicAddress = {
    '@type': 'PostalAddress',
    'addressCountry': 'DZ',
    'addressRegion': t('seo.address.region'),
    'addressLocality': t('seo.address.locality'),
    'streetAddress': t('seo.address.street'),
    'postalCode': '16000' // Update with actual postal code
  };
  
  // Schema.org structured data for a dental clinic
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': schemaType,
    'name': 'Dilmi Dental',
    'url': canonicalUrl,
    'logo': `${canonicalUrl}/dilmi_dental_icon.svg`,
    'image': `${canonicalUrl}${image}`,
    'description': siteDescription,
    'address': clinicAddress,
    'telephone': '+213 123 456 789', // Update with actual phone number
    'email': 'contact@dilmidental.dz', // Update with actual email
    'openingHours': t('seo.openingHours'),
    'priceRange': '$$',
    'currenciesAccepted': 'DZD',
    'paymentAccepted': 'Cash, Credit Card',
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': '36.7538', // Update with actual coordinates
      'longitude': '3.0588' // Update with actual coordinates
    },
    'sameAs': [
      'https://www.facebook.com/dilmidental',
      'https://www.instagram.com/dilmidental'
      // Add other social profiles as needed
    ],
    'medicalSpecialty': [
      t('seo.services.implantology'),
      t('seo.services.orthodontics'),
      t('seo.services.cosmetic'),
      t('seo.services.pediatric'),
      t('seo.services.endodontics'),
      t('seo.services.preventive')
    ]
  };

  // Determine the language code for hreflang
  const getHreflang = (lang) => {
    return lang === 'ar' ? 'ar-dz' : lang === 'fr' ? 'fr-dz' : 'en-dz';
  };
  
  return (
    <Helmet>
      {/* Basic Metadata */}
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content={currentLanguage} />
      <meta name="geo.region" content="DZ" />
      <meta name="geo.placename" content={t('seo.address.locality')} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Alternate language versions */}
      <link rel="alternate" href={`${canonicalUrl}`} hreflang="fr-dz" />
      <link rel="alternate" href={`${canonicalUrl}/ar`} hreflang="ar-dz" />
      <link rel="alternate" href={`${canonicalUrl}/en`} hreflang="en-dz" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={`${canonicalUrl}${image}`} />
      <meta property="og:locale" content={currentLanguage === 'ar' ? 'ar_DZ' : currentLanguage === 'fr' ? 'fr_DZ' : 'en_DZ'} />
      <meta property="og:site_name" content="Dilmi Dental" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDescription} />
      <meta name="twitter:image" content={`${canonicalUrl}${image}`} />
      
      {/* Schema.org structured data */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
      
      {/* Additional Metadata */}
      <meta name="author" content="Dilmi Dental" />
      <meta name="keywords" content={t('seo.keywords')} />
      <meta name="format-detection" content="telephone=yes" />
    </Helmet>
  );
};

export default SEO; 