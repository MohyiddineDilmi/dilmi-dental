import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// English translations
const enTranslations = {
  navbar: {
    home: 'Home',
    services: 'Services',
    testimonials: 'Testimonials',
    contact: 'Contact',
    bookAppointment: 'Book Appointment'
  },
  hero: {
    welcome: 'Welcome to Dilmi Dental',
    tagline: 'Your Smile, Our Passion',
    description: 'Providing exceptional dental care with modern technology and a gentle touch',
    bookButton: 'Book Appointment'
  },
  footer: {
    tagline: 'Your smile is our passion. Providing quality dental care with a gentle touch since 2019.',
    quickLinks: 'Quick Links',
    openingHours: 'Opening Hours',
    contactInfo: 'Contact Info',
    saturday_thursday: 'Saturday - Thursday:',
    saturday_thursday_hours: '9am - 8pm',
    friday: 'Friday:',
    friday_hours: 'Closed',
    address: 'Zighoud Youcef street, In front of the Houari Boumediene high school, Berhoum, M\'sila',
    allRightsReserved: 'All rights reserved.'
  },
  contact: {
    title: 'Contact Us',
    subtitle: 'We\'re here to answer any questions you may have about our dental services. Reach out to us anytime during our business hours.',
    address: 'Address',
    phone: 'Phone',
    email: 'Email',
    hours: 'Hours',
    addressLine1: 'Zighoud Youcef street',
    addressLine2: 'In front of the Houari Boumediene high school',
    addressLine3: 'Berhoum, M\'sila'
  },
  testimonials: {
    title: 'What Our Patients Say',
    testimonial1: {
      name: 'Amina B.',
      text: 'I\'ve been a patient at Dilmi Dental for years. The staff is always friendly and professional, and Dr. Dilmi is truly exceptional! May Allah bless them for their wonderful work!'
    },
    testimonial2: {
      name: 'Karim M.',
      text: 'After being afraid of dentists for years, I finally found Dilmi Dental. Their gentle approach has completely changed my perspective. I\'m so thankful for finding this clinic!'
    },
    testimonial3: {
      name: 'Yasmine Z.',
      text: 'The cosmetic work I had done at Dilmi Dental has given me so much confidence. I can\'t stop smiling! Thank you so much for your magnificent work!'
    }
  },
  services: {
    title: 'Our Services',
    general: {
      title: 'General Dentistry',
      description: 'Comprehensive care for all your dental needs, including check-ups, cleanings, and fillings to maintain optimal oral health.'
    },
    cosmetic: {
      title: 'Cosmetic Dentistry',
      description: 'Enhance your smile with our cosmetic treatments including teeth whitening, veneers, and smile makeovers.'
    },
    pediatric: {
      title: 'Pediatric Dentistry',
      description: 'Specialized dental care for children in a friendly environment that makes dental visits fun and comfortable.'
    },
    orthodontics: {
      title: 'Orthodontics',
      description: 'Straighten your teeth and correct bite issues with our modern orthodontic options including braces and clear aligners.'
    },
    endodontics: {
      title: 'Endodontics',
      description: 'Expert root canal therapy and treatments to relieve pain and save teeth that would otherwise be lost.'
    },
    preventive: {
      title: 'Preventive Care',
      description: 'Regular check-ups, cleanings, and education to maintain optimal oral health and prevent issues.'
    }
  },
  seo: {
    title: 'Dilmi Dental | Professional Dental Clinic in Algeria',
    description: 'Professional dental clinic offering quality dental care and modern treatments in Algeria. Specialists in implantology, orthodontics, and dental aesthetics.',
    keywords: 'dentist Algeria, dental clinic Algiers, dental implants, orthodontics, teeth whitening, dental emergency, Arabic dentist, dental care, dental clinic',
    address: {
      street: 'Zighoud Youcef street',
      locality: 'Berhoum',
      region: 'M\'sila',
      country: 'Algeria'
    },
    openingHours: 'Saturday to Thursday: 9AM - 8PM, Friday: Closed',
    services: {
      general: 'General Dentistry',
      cosmetic: 'Cosmetic Dentistry',
      pediatric: 'Pediatric Dentistry',
      orthodontics: 'Orthodontics',
      endodontics: 'Endodontics',
      preventive: 'Preventive Care'
    }
  }
};

// Arabic translations
const arTranslations = {
  navbar: {
    home: 'الرئيسية',
    services: 'الخدمات',
    testimonials: 'آراء المرضى',
    contact: 'اتصل بنا',
    bookAppointment: 'حجز موعد'
  },
  hero: {
    welcome: 'مرحبا بكم في عيادة دليمي للأسنان',
    tagline: 'ابتسامتك، شغفنا',
    description: 'نقدم رعاية أسنان استثنائية مع تكنولوجيا حديثة ولمسة لطيفة',
    bookButton: 'حجز موعد'
  },
  footer: {
    tagline: 'ابتسامتك هي شغفنا. نقدم رعاية الأسنان بجودة عالية ولمسة لطيفة منذ 2019.',
    quickLinks: 'روابط سريعة',
    openingHours: 'ساعات العمل',
    contactInfo: 'معلومات الاتصال',
    saturday_thursday: 'السبت - الخميس:',
    saturday_thursday_hours: '9 صباحًا - 8 مساءً',
    friday: 'الجمعة:',
    friday_hours: 'مغلق',
    address: 'شارع زيغود يوسف، مقابل ثانوية هواري بومدين، برهوم، المسيلة',
    allRightsReserved: 'جميع الحقوق محفوظة.'
  },
  contact: {
    title: 'اتصل بنا',
    subtitle: 'نحن هنا للإجابة على أي أسئلة قد تكون لديك حول خدمات طب الأسنان لدينا. تواصل معنا في أي وقت خلال ساعات العمل.',
    address: 'العنوان',
    phone: 'الهاتف',
    email: 'البريد الإلكتروني',
    hours: 'ساعات العمل',
    addressLine1: 'شارع زيغود يوسف',
    addressLine2: 'مقابل ثانوية هواري بومدين',
    addressLine3: 'برهوم، المسيلة'
  },
  testimonials: {
    title: 'ماذا يقول مرضانا',
    testimonial1: {
      name: 'أمينة ب.',
      text: 'أنا مريضة في عيادة دليمي للأسنان منذ سنوات. الطاقم دائمًا ودود ومحترف، والدكتور دليمي استثنائي حقًا! ربي يحفظهم على عملهم الرائع!'
    },
    testimonial2: {
      name: 'كريم م.',
      text: 'بعد أن كنت أخاف من أطباء الأسنان لسنوات، وجدت أخيرًا عيادة دليمي للأسنان. نهجهم اللطيف غير وجهة نظري تمامًا. أنا ممتن جدًا لاكتشاف هذه العيادة!'
    },
    testimonial3: {
      name: 'ياسمين ز.',
      text: 'العمل التجميلي الذي قمت به في عيادة دليمي للأسنان منحني الكثير من الثقة. لا أستطيع التوقف عن الابتسام! شكرًا جزيلاً على عملكم الرائع!'
    }
  },
  services: {
    title: 'خدماتنا',
    general: {
      title: 'طب الأسنان العام',
      description: 'رعاية شاملة لجميع احتياجات أسنانك، بما في ذلك الفحوصات والتنظيف والحشوات للحفاظ على صحة الفم المثلى.'
    },
    cosmetic: {
      title: 'طب الأسنان التجميلي',
      description: 'تحسين ابتسامتك مع علاجاتنا التجميلية بما في ذلك تبييض الأسنان، والقشرة الخزفية، وتجميل الابتسامة.'
    },
    pediatric: {
      title: 'طب أسنان الأطفال',
      description: 'رعاية أسنان متخصصة للأطفال في بيئة ودية تجعل زيارات الأسنان ممتعة ومريحة.'
    },
    orthodontics: {
      title: 'تقويم الأسنان',
      description: 'تقويم أسنانك وتصحيح مشاكل العضة مع خيارات تقويم الأسنان الحديثة بما في ذلك التقويم التقليدي والتقويم الشفاف.'
    },
    endodontics: {
      title: 'علاج جذور الأسنان',
      description: 'علاج قناة الجذر الخبير والعلاجات لتخفيف الألم وإنقاذ الأسنان التي كانت ستفقد.'
    },
    preventive: {
      title: 'الرعاية الوقائية',
      description: 'فحوصات منتظمة، وتنظيف، وتعليم للحفاظ على صحة الفم المثلى ومنع المشاكل.'
    }
  },
  seo: {
    title: 'عيادة دليمي للأسنان | عيادة أسنان احترافية في الجزائر',
    description: 'عيادة أسنان احترافية تقدم رعاية أسنان عالية الجودة وعلاجات حديثة في الجزائر. متخصصون في زراعة الأسنان، تقويم الأسنان، وتجميل الأسنان.',
    keywords: 'طبيب أسنان الجزائر، عيادة أسنان الجزائر، زراعة الأسنان، تقويم الأسنان، تبييض الأسنان، طوارئ الأسنان، طبيب أسنان عربي، رعاية الأسنان، عيادة الأسنان',
    address: {
      street: 'شارع زيغود يوسف',
      locality: 'برهوم',
      region: 'المسيلة',
      country: 'الجزائر'
    },
    openingHours: 'السبت إلى الخميس: 9 صباحًا - 8 مساءً، الجمعة: مغلق',
    services: {
      general: 'طب الأسنان العام',
      cosmetic: 'طب الأسنان التجميلي',
      pediatric: 'طب أسنان الأطفال',
      orthodontics: 'تقويم الأسنان',
      endodontics: 'علاج جذور الأسنان',
      preventive: 'الرعاية الوقائية'
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslations
      },
      ar: {
        translation: arTranslations
      }
    },
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false // React already safes from XSS
    }
  });

export default i18n; 