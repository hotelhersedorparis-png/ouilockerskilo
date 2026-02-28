export type Language = 'en' | 'fr' | 'es';

export interface Translations {
  nav: {
    howItWorks: string;
    sizes: string;
    locations: string;
    faq: string;
    bookNow: string;
    language: string;
    help: string;
  };
  hero: {
    headline: string;
    subheadline: string;
    primaryCta: string;
    secondaryText: string;
  };
  trust: {
    users: string;
    cctv: string;
    ssl: string;
  };
  features: {
    title: string;
    noQueues: string;
    noQueuesDesc: string;
    flexible: string;
    flexibleDesc: string;
    pinCode: string;
    pinCodeDesc: string;
    locations: string;
    locationsDesc: string;
  };
  howItWorks: {
    title: string;
    subtitle: string;
    step1: string;
    step1Desc: string;
    step2: string;
    step2Desc: string;
    step3: string;
    step3Desc: string;
  };
  sizes: {
    title: string;
    small: string;
    smallDesc: string;
    smallPrice: string;
    medium: string;
    mediumDesc: string;
    mediumPrice: string;
    large: string;
    largeDesc: string;
    largePrice: string;
    note: string;
    bookNow: string;
  };
  testimonials: {
    title: string;
    quote1: string;
    quote1Author: string;
    quote2: string;
    quote2Author: string;
    quote3: string;
    quote3Author: string;
    quote4: string;
    quote4Author: string;
    quote5: string;
    quote5Author: string;
    quote6: string;
    quote6Author: string;
  };
  locations: {
    title: string;
    subtitle: string;
    bookAtLocation: string;
    open: string;
  };
  faq: {
    title: string;
    q1: string;
    a1: string;
    q2: string;
    a2: string;
    q3: string;
    a3: string;
    q4: string;
    a4: string;
    q5: string;
    a5: string;
  };
  cta: {
    headline: string;
    text: string;
    button: string;
  };
  footer: {
    brand: string;
    tagline: string;
    about: string;
    careers: string;
    blog: string;
    press: string;
    helpCenter: string;
    terms: string;
    privacy: string;
    cookies: string;
    contact: string;
    copyright: string;
    quickLinks: string;
    support: string;
    followUs: string;
    basedOnReviews: string;
  };
  newsletter: {
    title: string;
    subtitle: string;
    placeholder: string;
    button: string;
    success: string;
    privacy: string;
  };
  cookieConsent: {
    message: string;
    accept: string;
    decline: string;
    learnMore: string;
  };
  contactWidget: {
    callUs: string;
    whatsapp: string;
    contact: string;
  };
  promoBanner: {
    message: string;
    copy: string;
    copied: string;
    dismiss: string;
  };
  about: {
    title: string;
    subtitle: string;
    lockersStored: string;
    happyCustomers: string;
    rating: string;
    locations: string;
    story: {
      title: string;
      paragraph1: string;
      paragraph2: string;
    };
    founded: string;
    ourValues: string;
    valuesSubtitle: string;
    values: {
      security: { title: string; description: string; };
      convenience: { title: string; description: string; };
      location: { title: string; description: string; };
    };
    cta: {
      title: string;
      subtitle: string;
      button: string;
    };
  };
  terms: {
    title: string;
    lastUpdated: string;
    section1: { title: string; content: string; };
    section2: { title: string; content: string; };
    section3: { title: string; content: string; };
    section4: { title: string; content: string; };
    section5: { title: string; content: string; };
    section6: { title: string; content: string; };
  };
  privacy: {
    title: string;
    subtitle: string;
    section1: { title: string; content: string; };
    section2: { title: string; content: string; };
    section3: { title: string; content: string; };
    section4: { title: string; content: string; };
    section5: { title: string; content: string; };
    contactTitle: string;
    phone: string;
    address: string;
  };
  cookies: {
    title: string;
    subtitle: string;
    intro: string;
    essential: { title: string; description: string; examples: string[]; };
    functional: { title: string; description: string; examples: string[]; };
    analytics: { title: string; description: string; examples: string[]; };
    manageTitle: string;
    manageDescription: string;
    browserSettings: string;
    cookieSettings: string;
    thirdPartyTitle: string;
    thirdPartyDescription: string;
    updatesTitle: string;
    updatesDescription: string;
  };
  blog: {
    title: string;
    subtitle: string;
    categories: { all: string; tips: string; locations: string; travel: string; };
    posts: {
      guide: { title: string; excerpt: string; date: string; readTime: string; };
      marais: { title: string; excerpt: string; date: string; readTime: string; };
      tips: { title: string; excerpt: string; date: string; readTime: string; };
    };
    readMore: string;
    newsletter: { title: string; subtitle: string; placeholder: string; button: string; };
  };
  careers: {
    title: string;
    subtitle: string;
    whyJoin: string;
    whyJoinSubtitle: string;
    benefits: {
      health: { title: string; description: string; };
      flexibility: { title: string; description: string; };
      growth: { title: string; description: string; };
    };
    openPositions: string;
    positionsSubtitle: string;
    positions: {
      customerService: { title: string; department: string; location: string; type: string; };
      operationsManager: { title: string; department: string; location: string; type: string; };
    };
    apply: string;
    noPositions: string;
    cta: { title: string; subtitle: string; button: string; };
  };
  press: {
    title: string;
    subtitle: string;
    pressKit: string;
    pressKitDescription: string;
    brandAssets: string;
    brandAssetsDesc: string;
    factSheet: string;
    factSheetDesc: string;
    highResPhotos: string;
    download: string;
    releasesTitle: string;
    releases: {
      expansion: { date: string; title: string; excerpt: string; };
      partnership: { date: string; title: string; excerpt: string; };
      award: { date: string; title: string; excerpt: string; };
    };
    coverageTitle: string;
    coverage: {
      figaro: { date: string; title: string; };
      echos: { date: string; title: string; };
      match: { date: string; title: string; };
    };
    readMore: string;
    contactTitle: string;
    contactDescription: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      howItWorks: 'How It Works',
      sizes: 'Sizes & Pricing',
      locations: 'Locations',
      faq: 'FAQ',
      bookNow: 'Book Now',
      language: 'Language',
      help: 'Help',
    },
    hero: {
      headline: 'Secure Self-Storage Lockers, Instant Access',
      subheadline: 'Drop your bags and go. Rent by the hour, day, or month with our smart, contactless lockers. 24/7 access.',
      primaryCta: 'Find a Locker',
      secondaryText: 'Trusted by 1,000+ users.',
    },
    trust: {
      users: 'Trusted by 1,000+ users',
      cctv: '24/7 CCTV Monitoring',
      ssl: 'SSL Secured Payments',
    },
    features: {
      title: 'Why Choose Oui Lockers?',
      noQueues: 'No Queues',
      noQueuesDesc: 'Skip the line. Book online and access your locker instantly with a PIN code.',
      flexible: 'Flexible Duration',
      flexibleDesc: 'Rent by the hour, day, or month. Extend your rental anytime.',
      pinCode: 'Pin Code Access',
      pinCodeDesc: 'Secure, contactless entry. Your code is sent to your phone instantly.',
      locations: 'Various Locations',
      locationsDesc: 'Find lockers in convenient city center locations worldwide.',
    },
    howItWorks: {
      title: 'How It Works',
      subtitle: 'Renting a smart locker is as easy as 1-2-3. No paperwork, no queues.',
      step1: 'Book Online',
      step1Desc: 'Select your location, locker size, and duration. Receive instant confirmation and a unique access code.',
      step2: 'Drop & Go',
      step2Desc: 'Enter your access code on the keypad. The door opens automatically. Place your items inside and close.',
      step3: 'Retrieve Anytime',
      step3Desc: 'Come and go as you please. Use the same code to re-open the locker. When done, just close the door.',
    },
    sizes: {
      title: 'Choose the Right Size',
      small: 'Small',
      smallDesc: 'Ideal for backpacks, purses, and small shopping bags.',
      smallPrice: 'From €5/day',
      medium: 'Medium',
      mediumDesc: 'Fits 1-2 standard suitcases or a carry-on bag.',
      mediumPrice: 'From €8/day',
      large: 'Large',
      largeDesc: 'Perfect for sports gear, golf clubs, or 3+ large suitcases.',
      largePrice: 'From €12/day',
      note: 'Final price is calculated by duration in the booking engine.',
      bookNow: 'Book Now',
    },
    testimonials: {
      title: 'What Our Customers Say',
      quote1: 'Saved my trip! My flight was delayed and I needed a place to store my luggage for 6 hours. Oui Lockers was a lifesaver.',
      quote1Author: 'Sarah J. - Traveler',
      quote2: 'Cheapest and easiest way to store my stuff over the summer break. No contract needed.',
      quote2Author: 'Marc D. - Student',
      quote3: 'I use the large locker for my golf clubs during the week. So convenient.',
      quote3Author: 'Carlos R. - Local',
      quote4: 'Stored our bags for a full day while exploring the Marais. The PIN system is genius — no waiting for staff!',
      quote4Author: 'Michael T., USA',
      quote5: 'Parfait pour notre séjour à Paris. Nous avons pu visiter le Louvre sans nos valises. Je recommande vivement !',
      quote5Author: 'Claire D., Belgique',
      quote6: 'Ottimo servizio! Abbiamo lasciato i bagagli qui prima del check-in e abbiamo esplorato la città liberi. Torneremo!',
      quote6Author: 'Marco R., Italia',
    },
    locations: {
      title: 'Find a Locker Near You',
      subtitle: 'Choose from our convenient city center locations',
      bookAtLocation: 'Book at This Location',
      open: 'Open',
    },
    faq: {
      title: 'Frequently Asked Questions',
      q1: 'How do I receive my access code?',
      a1: 'You will receive a 6-digit PIN code via SMS and email immediately after your booking is confirmed.',
      q2: 'Can I extend my rental time?',
      a2: 'Yes! You can extend your rental through the link in your confirmation email or by visiting our booking engine again, as long as the locker is available.',
      q3: 'What items are prohibited?',
      a3: 'For safety reasons, flammable materials, illegal substances, and perishable food items are not allowed in the lockers.',
      q4: 'What if I lose my code?',
      a4: 'Contact our support team at help@ouilockers.com with your booking ID. We can verify your identity and resend your code.',
      q5: 'Is there a size limit for items?',
      a5: 'Please check the dimensions on our "Sizes" page. If your item doesn\'t fit, the locker door will not close, and the system will alert you to choose a larger size.',
    },
    cta: {
      headline: 'Ready to free your hands?',
      text: 'Find a locker near you and book in seconds.',
      button: 'View Locations',
    },
    footer: {
      brand: 'Oui Lockers',
      tagline: 'Smart storage for modern living.',
      about: 'About Us',
      careers: 'Careers',
      blog: 'Blog',
      press: 'Press',
      helpCenter: 'Help Center',
      terms: 'Terms of Service',
      privacy: 'Privacy Policy',
      cookies: 'Cookie Policy',
      contact: 'help@ouilockers.com',
      copyright: '© 2025 Oui Lockers. All rights reserved.',
      quickLinks: 'Quick Links',
      support: 'Support',
      followUs: 'Follow Us',
      basedOnReviews: 'Based on 250 reviews',
    },
    newsletter: {
      title: 'Stay Updated',
      subtitle: 'Get exclusive deals and Paris travel tips delivered to your inbox.',
      placeholder: 'Enter your email',
      button: 'Subscribe',
      success: 'Thanks for subscribing! 🎉',
      privacy: 'No spam, unsubscribe anytime.',
    },
    cookieConsent: {
      message: 'We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.',
      accept: 'Accept',
      decline: 'Decline',
      learnMore: 'Learn More',
    },
    contactWidget: {
      callUs: 'Call Us',
      whatsapp: 'WhatsApp',
      contact: 'Contact',
    },
    promoBanner: {
      message: '🎉 Use code **PARIS10** for 10% off your first booking!',
      copy: 'Copy Code',
      copied: 'Copied!',
      dismiss: 'Dismiss',
    },
    about: {
      title: 'About Oui Lockers',
      subtitle: 'Making luggage storage simple, secure, and accessible across Paris.',
      lockersStored: 'Lockers Stored',
      happyCustomers: 'Happy Customers',
      rating: 'Rating',
      locations: 'Locations',
      story: {
        title: 'Our Story',
        paragraph1: 'Founded in 2020, Oui Lockers began with a simple mission: to make luggage storage stress-free for travelers visiting Paris. What started as a single location near the Marais has grown into multiple convenient locations across the city.',
        paragraph2: 'Today, we continue to innovate with smart, contactless lockers that give travelers the freedom to explore Paris hands-free. Our team is passionate about customer service and ensuring every visitor has a seamless experience.',
      },
      founded: 'Founded in Paris',
      ourValues: 'Our Values',
      valuesSubtitle: 'What drives us every day',
      values: {
        security: {
          title: 'Security First',
          description: 'Your belongings are safe with us. All lockers are monitored 24/7 by CCTV and equipped with individual alarm systems.',
        },
        convenience: {
          title: 'Maximum Convenience',
          description: 'Book online in seconds, access your locker instantly with a PIN code, and enjoy 24/7 availability.',
        },
        location: {
          title: 'Prime Locations',
          description: 'Our lockers are situated in the heart of Paris, making it easy to drop off and pick up your luggage.',
        },
      },
      cta: {
        title: 'Ready to explore Paris?',
        subtitle: 'Find a locker near you and start your adventure.',
        button: 'Find a Locker',
      },
    },
    terms: {
      title: 'Terms of Service',
      lastUpdated: 'Last updated: January 2025',
      section1: {
        title: '1. Acceptance of Terms',
        content: 'By accessing and using Oui Lockers services, you accept and agree to be bound by the terms and provision of this agreement.',
      },
      section2: {
        title: '2. Description of Service',
        content: 'Oui Lockers provides users with access to secure self-storage lockers in various locations across Paris. Users can rent lockers on an hourly, daily, or monthly basis.',
      },
      section3: {
        title: '3. User Responsibilities',
        content: 'Users are responsible for ensuring their belongings are properly secured and for maintaining their access codes. Users must not store prohibited items.',
      },
      section4: {
        title: '4. Payment and Pricing',
        content: 'All rentals must be paid in advance. Prices are calculated based on the duration of rental and locker size selected.',
      },
      section5: {
        title: '5. Limitation of Liability',
        content: 'Oui Lockers shall not be liable for any loss or damage to stored items, except where caused by our negligence.',
      },
      section6: {
        title: '6. Contact Us',
        content: 'If you have any questions about these Terms of Service, please contact us at help@ouilockers.com.',
      },
    },
    privacy: {
      title: 'Privacy Policy',
      subtitle: 'How we protect and handle your personal data.',
      section1: {
        title: 'Information We Collect',
        content: 'We collect personal information such as your name, email, phone number, and payment details when you make a booking.',
      },
      section2: {
        title: 'How We Use Your Information',
        content: 'Your information is used to process bookings, provide customer support, and communicate with you about your reservations.',
      },
      section3: {
        title: 'Data Protection',
        content: 'We implement appropriate security measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.',
      },
      section4: {
        title: 'Your Rights',
        content: 'You have the right to access, correct, or delete your personal data. Contact us to exercise these rights.',
      },
      section5: {
        title: 'Changes to This Policy',
        content: 'We may update this privacy policy from time to time. Any changes will be posted on this page.',
      },
      contactTitle: 'Contact Us',
      phone: 'Phone',
      address: 'Address',
    },
    cookies: {
      title: 'Cookie Policy',
      subtitle: 'Understanding how we use cookies.',
      intro: 'This Cookie Policy explains what Cookies are and how Oui Lockers uses them. By using our service, you agree to our use of cookies.',
      essential: {
        title: 'Essential Cookies',
        description: 'These cookies are necessary for the website to function and cannot be switched off.',
        examples: ['Session security', 'Login state', 'Basket functionality'],
      },
      functional: {
        title: 'Functional Cookies',
        description: 'These cookies enable enhanced functionality and personalization.',
        examples: ['Language preferences', 'Region settings'],
      },
      analytics: {
        title: 'Analytics Cookies',
        description: 'These cookies help us understand how visitors interact with our website.',
        examples: ['Page views', 'Traffic sources', 'User journeys'],
      },
      manageTitle: 'Managing Your Cookies',
      manageDescription: 'You can control or delete cookies through your browser settings.',
      browserSettings: 'Browser Settings',
      cookieSettings: 'Cookie Settings',
      thirdPartyTitle: 'Third-Party Cookies',
      thirdPartyDescription: 'We may use third-party services that also set cookies on your device.',
      updatesTitle: 'Updates to This Policy',
      updatesDescription: 'We may update this policy from time to time. Please review it periodically.',
    },
    blog: {
      title: 'Blog',
      subtitle: 'Tips, guides, and stories about luggage storage and Paris travel.',
      categories: {
        all: 'All',
        tips: 'Tips',
        locations: 'Locations',
        travel: 'Travel',
      },
      posts: {
        guide: {
          title: 'The Ultimate Guide to Luggage Storage in Paris',
          excerpt: 'Everything you need to know about storing your luggage safely while exploring the city of lights.',
          date: 'Jan 15, 2025',
          readTime: '5 min read',
        },
        marais: {
          title: 'Best Luggage Storage Spots Near Le Marais',
          excerpt: 'Discover the most convenient locations for storing your bags while shopping in the Marais district.',
          date: 'Jan 10, 2025',
          readTime: '3 min read',
        },
        tips: {
          title: '10 Tips for Traveling Light in Paris',
          excerpt: 'Learn how to pack smart and make the most of your Paris trip without the heavy baggage.',
          date: 'Jan 5, 2025',
          readTime: '4 min read',
        },
      },
      readMore: 'Read more',
      newsletter: {
        title: 'Get Travel Tips',
        subtitle: 'Subscribe to our newsletter for exclusive deals and Paris travel advice.',
        placeholder: 'Enter your email',
        button: 'Subscribe',
      },
    },
    careers: {
      title: 'Careers at Oui Lockers',
      subtitle: 'Join our team and help revolutionize luggage storage.',
      whyJoin: 'Why Join Us?',
      whyJoinSubtitle: 'Be part of a growing startup in the heart of Paris',
      benefits: {
        health: {
          title: 'Health Benefits',
          description: 'Comprehensive health insurance and wellness programs.',
        },
        flexibility: {
          title: 'Flexible Work',
          description: 'Remote work options and flexible working hours.',
        },
        growth: {
          title: 'Growth Opportunities',
          description: 'Career development and training programs.',
        },
      },
      openPositions: 'Open Positions',
      positionsSubtitle: 'Find your next role at Oui Lockers',
      positions: {
        customerService: {
          title: 'Customer Service Representative',
          department: 'Operations',
          location: 'Paris, France',
          type: 'Full-time',
        },
        operationsManager: {
          title: 'Operations Manager',
          department: 'Management',
          location: 'Paris, France',
          type: 'Full-time',
        },
      },
      apply: 'Apply Now',
      noPositions: 'No open positions at the moment. Check back soon!',
      cta: {
        title: 'Don\'t see the right role?',
        subtitle: 'We\'re always looking for talented people. Send us your CV!',
        button: 'Email Us',
      },
    },
    press: {
      title: 'Press',
      subtitle: 'Latest news, media coverage, and press resources.',
      pressKit: 'Press Kit',
      pressKitDescription: 'Download our brand assets and media materials.',
      brandAssets: 'Brand Assets',
      brandAssetsDesc: 'Logos, colors, and brand guidelines',
      factSheet: 'Fact Sheet',
      factSheetDesc: 'Company overview and key facts',
      highResPhotos: 'High-Res Photos',
      download: 'Download',
      releasesTitle: 'Press Releases',
      releases: {
        expansion: {
          date: 'December 2024',
          title: 'Oui Lockers Expands to 5 New Locations in Paris',
          excerpt: 'The leading luggage storage service announces rapid expansion across the French capital.',
        },
        partnership: {
          date: 'October 2024',
          title: 'Oui Lockers Partners with Major Hotels',
          excerpt: 'New partnerships make luggage storage more accessible for hotel guests.',
        },
        award: {
          date: 'August 2024',
          title: 'Oui Lockers Wins Best Travel Innovation Award',
          excerpt: 'Recognition for revolutionizing luggage storage in European cities.',
        },
      },
      coverageTitle: 'Media Coverage',
      coverage: {
        figaro: {
          date: 'November 2024',
          title: 'How Oui Lockers is Simplifying Travel in Paris',
        },
        echos: {
          date: 'September 2024',
          title: 'The Startup Revolutionizing Luggage Storage',
        },
        match: {
          date: 'July 2024',
          title: 'Paris\'s Smart Solution for Travelers',
        },
      },
      readMore: 'Read more',
      contactTitle: 'Press Contact',
      contactDescription: 'For media inquiries, please contact our press team.',
    },
  },
  fr: {
    nav: {
      howItWorks: 'Comment ça marche',
      sizes: 'Tailles & Tarifs',
      locations: 'Emplacements',
      faq: 'FAQ',
      bookNow: 'Réserver',
      language: 'Langue',
      help: 'Aide',
    },
    hero: {
      headline: 'Consignes de stockage sécurisées, accès instantané',
      subheadline: 'Déposez vos bagages et partez. Louez à l\'heure, à la journée ou au mois avec nos casiers intelligents sans contact. Accès 24/7.',
      primaryCta: 'Trouver un casier',
      secondaryText: 'Approuvé par plus de 1 000 utilisateurs.',
    },
    trust: {
      users: 'Approuvé par 1 000+ utilisateurs',
      cctv: 'Surveillance CCTV 24/7',
      ssl: 'Paiements SSL sécurisés',
    },
    features: {
      title: 'Pourquoi choisir Oui Lockers?',
      noQueues: 'Pas de files d\'attente',
      noQueuesDesc: 'Évitez la file. Réservez en ligne et accédez à votre casier instantanément avec un code PIN.',
      flexible: 'Durée flexible',
      flexibleDesc: 'Louez à l\'heure, à la journée ou au mois. Prolongez votre location à tout moment.',
      pinCode: 'Accès par code PIN',
      pinCodeDesc: 'Entrée sans contact sécurisée. Votre code est envoyé instantanément à votre téléphone.',
      locations: 'Divers emplacements',
      locationsDesc: 'Trouvez des casiers dans des pratiques emplacements en centre-ville dans le monde entier.',
    },
    howItWorks: {
      title: 'Comment ça marche',
      subtitle: 'Louer un casier intelligent est aussi simple que 1-2-3. Pas de papier, pas de file.',
      step1: 'Réserver en ligne',
      step1Desc: 'Sélectionnez votre emplacement, la taille du casier et la durée. Recevez une confirmation instantanée et un code d\'accès unique.',
      step2: 'Déposez et partez',
      step2Desc: 'Entrez votre code d\'accès sur le clavier. La porte s\'ouvre automatiquement. Placez vos objets à l\'intérieur et fermez.',
      step3: 'Récupérez à tout moment',
      step3Desc: 'Venez et partez à votre guise. Utilisez le même code pour rouvrir le casier. Une fois terminé, fermez simplement la porte.',
    },
    sizes: {
      title: 'Choisissez la bonne taille',
      small: 'Petit',
      smallDesc: 'Idéal pour les sacs à dos, les sacs à main et les petits sacs de shopping.',
      smallPrice: 'À partir de 5€/jour',
      medium: 'Moyen',
      mediumDesc: 'Convient à 1-2 valises standard ou un bagage à main.',
      mediumPrice: 'À partir de 8€/jour',
      large: 'Grand',
      largeDesc: 'Parfait pour l\'équipement sportif, les clubs de golf ou 3+ grandes valises.',
      largePrice: 'À partir de 12€/jour',
      note: 'Le prix final est calculé selon la durée dans le moteur de réservation.',
      bookNow: 'Réserver',
    },
    testimonials: {
      title: 'Ce que disent nos clients',
      quote1: 'Sauvé mon voyage! Mon vol était retardé et j\'avais besoin d\'un endroit pour stocker mes bagages pendant 6 heures. Oui Lockers a été une sauvegarde.',
      quote1Author: 'Sarah J. - Voyageuse',
      quote2: 'Le moyen le moins cher et le plus simple de stocker mes affaires pendant les vacances d\'été. Pas de contrat nécessaire.',
      quote2Author: 'Marc D. - Étudiant',
      quote3: 'J\'utilise le grand casier pour mes clubs de golf pendant la semaine. Très pratique.',
      quote3Author: 'Carlos R. - Local',
      quote4: 'Nous avons stocké nos sacs toute la journée en explorant le Marais. Le système PIN est génial — pas d\'attente pour le personnel !',
      quote4Author: 'Michael T., USA',
      quote5: 'Parfait pour notre séjour à Paris. Nous avons pu visiter le Louvre sans nos valises. Je recommande vivement !',
      quote5Author: 'Claire D., Belgique',
      quote6: 'Excellent service ! Nous avons laissé nos bagages ici avant le check-in et avons exploré la ville librement. Nous reviendrons !',
      quote6Author: 'Marco R., Italia',
    },
    locations: {
      title: 'Trouvez un casier près de chez vous',
      subtitle: 'Choisissez parmi nos emplacements pratiques en centre-ville',
      bookAtLocation: 'Réserver à cet emplacement',
      open: 'Ouvert',
    },
    faq: {
      title: 'Questions fréquentes',
      q1: 'Comment recevoir mon code d\'accès?',
      a1: 'Vous recevrez un code PIN à 6 chiffres par SMS et par email immédiatement après la confirmation de votre réservation.',
      q2: 'Puis-je prolonger ma durée de location?',
      a2: 'Oui! Vous pouvez prolonger votre location via le lien dans votre email de confirmation ou en visitant à nouveau notre moteur de réservation, tant que le casier est disponible.',
      q3: 'Quels articles sont interdits?',
      a3: 'Pour des raisons de sécurité, les matériaux inflammables, les substances illégales et les aliments périssables ne sont pas autorisés dans les casiers.',
      q4: 'Que faire si je perds mon code?',
      a4: 'Contactez notre équipe de support à help@ouilockers.com avec votre ID de réservation. Nous pouvons vérifier votre identité et vous renvoyer votre code.',
      q5: 'Y a-t-il une limite de taille pour les articles?',
      a5: 'Veuillez vérifier les dimensions sur notre page "Tailles". Si votre article ne rentre pas, la porte du casier ne se fermera pas et le système vous alertera pour choisir une taille plus grande.',
    },
    cta: {
      headline: 'Prêt à libérer vos mains?',
      text: 'Trouvez un casier près de chez vous et réservez en quelques secondes.',
      button: 'Voir les emplacements',
    },
    footer: {
      brand: 'Oui Lockers',
      tagline: 'Stockage intelligent pour la vie moderne.',
      about: 'À propos',
      careers: 'Carrières',
      blog: 'Blog',
      press: 'Presse',
      helpCenter: 'Centre d\'aide',
      terms: 'Conditions d\'utilisation',
      privacy: 'Politique de confidentialité',
      cookies: 'Politique de cookies',
      contact: 'help@ouilockers.com',
      copyright: '© 2025 Oui Lockers. Tous droits réservés.',
      quickLinks: 'Liens Rapides',
      support: 'Support',
      followUs: 'Suivez-nous',
      basedOnReviews: 'Basé sur 250 avis',
    },
    newsletter: {
      title: 'Restez Informé',
      subtitle: 'Recevez des offres exclusives et des conseils de voyage à Paris dans votre boîte mail.',
      placeholder: 'Entrez votre email',
      button: 'S\'abonner',
      success: 'Merci pour votre inscription ! 🎉',
      privacy: 'Pas de spam, désinscription à tout moment.',
    },
    cookieConsent: {
      message: 'Nous utilisons des cookies pour améliorer votre expérience. En continuant à visiter ce site, vous acceptez notre utilisation des cookies.',
      accept: 'Accepter',
      decline: 'Refuser',
      learnMore: 'En savoir plus',
    },
    contactWidget: {
      callUs: 'Appelez-nous',
      whatsapp: 'WhatsApp',
      contact: 'Contact',
    },
    promoBanner: {
      message: '🎉 Utilisez le code **PARIS10** pour 10% de réduction sur votre première réservation !',
      copy: 'Copier le code',
      copied: 'Copié !',
      dismiss: 'Fermer',
    },
    about: {
      title: 'À propos d\'Oui Lockers',
      subtitle: 'Faire du stockage de bagages quelque chose de simple, sécurisé et accessible à Paris.',
      lockersStored: 'Bagages stockés',
      happyCustomers: 'Clients satisfaits',
      rating: 'Note',
      locations: 'Emplacements',
      story: {
        title: 'Notre histoire',
        paragraph1: 'Fondée en 2020, Oui Lockers a commencé avec une mission simple : rendre le stockage de bagages sans stress pour les voyageurs visitant Paris. Ce qui a commencé comme un seul emplacement près du Marais s\'est développé en plusieurs endroits pratiques à travers la ville.',
        paragraph2: 'Aujourd\'hui, nous continuons à innover avec des casiers intelligents et sans contact qui donnent aux voyageurs la liberté d\'explorer Paris les mains libres. Notre équipe est passionnée par le service client et s\'assure que chaque visiteur ait une expérience fluide.',
      },
      founded: 'Fondé à Paris',
      ourValues: 'Nos valeurs',
      valuesSubtitle: 'Ce qui nous pousse chaque jour',
      values: {
        security: {
          title: 'Sécurité avant tout',
          description: 'Vos affaires sont en sécurité avec nous. Tous les casiers sont surveillés 24h/24 par CCTV et équipés de systèmes d\'alarme individuels.',
        },
        convenience: {
          title: 'Commodité maximale',
          description: 'Réservez en ligne en quelques secondes, accédez à votre casier instantanément avec un code PIN, et profitez d\'une disponibilité 24h/24.',
        },
        location: {
          title: 'Emplacements privilégiés',
          description: 'Nos casiers sont situés au cœur de Paris, ce qui facilite le dépôt et la récupération de vos bagages.',
        },
      },
      cta: {
        title: 'Prêt à explorer Paris ?',
        subtitle: 'Trouvez un casier près de vous et commencez votre aventure.',
        button: 'Trouver un casier',
      },
    },
    terms: {
      title: 'Conditions d\'utilisation',
      lastUpdated: 'Dernière mise à jour : janvier 2025',
      section1: {
        title: '1. Acceptation des conditions',
        content: 'En accédant et en utilisant les services d\'Oui Lockers, vous acceptez et convenez d\'être lié par les termes et dispositions de cet accord.',
      },
      section2: {
        title: '2. Description du service',
        content: 'Oui Lockers offre aux utilisateurs l\'accès à des casiers de stockage sécurisé dans différents endroits à Paris. Les utilisateurs peuvent louer des casiers à l\'heure, à la journée ou au mois.',
      },
      section3: {
        title: '3. Responsabilités de l\'utilisateur',
        content: 'Les utilisateurs sont responsables de s\'assurer que leurs affaires sont correctement sécurisées et de maintenir leurs codes d\'accès. Les utilisateurs ne doivent pas stocker d\'articles interdits.',
      },
      section4: {
        title: '4. Paiement et tarification',
        content: 'Toutes les locations doivent être payées à l\'avance. Les prix sont calculés en fonction de la durée de location et de la taille du casier sélectionné.',
      },
      section5: {
        title: '5. Limitation de responsabilité',
        content: 'Oui Lockers ne sera pas responsable de toute perte ou dommage aux articles stockés, sauf en cas de négligence de notre part.',
      },
      section6: {
        title: '6. Nous contacter',
        content: 'Si vous avez des questions sur ces conditions d\'utilisation, veuillez nous contacter à help@ouilockers.com.',
      },
    },
    privacy: {
      title: 'Politique de confidentialité',
      subtitle: 'Comment nous protégeons et traitons vos données personnelles.',
      section1: {
        title: 'Informations que nous collectons',
        content: 'Nous collectons des informations personnelles telles que votre nom, adresse e-mail, numéro de téléphone et coordonnées de paiement lorsque vous effectuez une réservation.',
      },
      section2: {
        title: 'Comment nous utilisons vos informations',
        content: 'Vos informations sont utilisées pour traiter les réservations, fournir un support client et communiquer avec vous au sujet de vos réservations.',
      },
      section3: {
        title: 'Protection des données',
        content: 'Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos données personnelles contre tout accès non autorisé, altération, divulgation ou destruction.',
      },
      section4: {
        title: 'Vos droits',
        content: 'Vous avez le droit d\'accéder, de corriger ou de supprimer vos données personnelles. Contactez-nous pour exercer ces droits.',
      },
      section5: {
        title: 'Modifications de cette politique',
        content: 'Nous pouvons mettre à jour cette politique de confidentialité de temps à autre. Toute modification sera publiée sur cette page.',
      },
      contactTitle: 'Nous contacter',
      phone: 'Téléphone',
      address: 'Adresse',
    },
    cookies: {
      title: 'Politique de cookies',
      subtitle: 'Comprendre comment nous utilisons les cookies.',
      intro: 'Cette politique de cookies explique ce que sont les cookies et comment Oui Lockers les utilise. En utilisant notre service, vous acceptez notre utilisation des cookies.',
      essential: {
        title: 'Cookies essentiels',
        description: 'Ces cookies sont nécessaires au fonctionnement du site web et ne peuvent pas être désactivés.',
        examples: ['Sécurité de session', 'État de connexion', 'Fonctionnalité du panier'],
      },
      functional: {
        title: 'Cookies fonctionnels',
        description: 'Ces cookies permettent des fonctionnalités et personnalisation améliorées.',
        examples: ['Préférences de langue', 'Paramètres de région'],
      },
      analytics: {
        title: 'Cookies analytiques',
        description: 'Ces cookies nous aident à comprendre comment les visiteurs interagissent avec notre site web.',
        examples: ['Pages vues', 'Sources de trafic', 'Parcours utilisateur'],
      },
      manageTitle: 'Gérer vos cookies',
      manageDescription: 'Vous pouvez contrôler ou supprimer les cookies via les paramètres de votre navigateur.',
      browserSettings: 'Paramètres du navigateur',
      cookieSettings: 'Paramètres des cookies',
      thirdPartyTitle: 'Cookies tiers',
      thirdPartyDescription: 'Nous pouvons utiliser des services tiers qui définissent également des cookies sur votre appareil.',
      updatesTitle: 'Mises à jour de cette politique',
      updatesDescription: 'Nous pouvons mettre à jour cette politique de temps à temps. Veuillez la consulter périodiquement.',
    },
    blog: {
      title: 'Blog',
      subtitle: 'Conseils, guides et histoires sur le stockage de bagages et les voyages à Paris.',
      categories: {
        all: 'Tout',
        tips: 'Conseils',
        locations: 'Emplacements',
        travel: 'Voyage',
      },
      posts: {
        guide: {
          title: 'Le guide ultime du stockage de bagages à Paris',
          excerpt: 'Tout ce que vous devez savoir sur le stockage sécurisé de vos bagages tout en explorant la ville lumière.',
          date: '15 jan. 2025',
          readTime: '5 min de lecture',
        },
        marais: {
          title: 'Meilleurs endroits pour stocker vos bagages près du Marais',
          excerpt: 'Découvrez les emplacements les plus pratiques pour stocker vos sacs tout en faisant du shopping dans le quartier du Marais.',
          date: '10 jan. 2025',
          readTime: '3 min de lecture',
        },
        tips: {
          title: '10 conseils pour voyager léger à Paris',
          excerpt: 'Apprenez à faire vos valises intelligemment et à tirer le meilleur de votre voyage à Paris sans baggage lourd.',
          date: '5 jan. 2025',
          readTime: '4 min de lecture',
        },
      },
      readMore: 'Lire la suite',
      newsletter: {
        title: 'Recevez des conseils de voyage',
        subtitle: 'Abonnez-vous à notre newsletter pour des offres exclusives et des conseils de voyage à Paris.',
        placeholder: 'Entrez votre e-mail',
        button: 'S\'abonner',
      },
    },
    careers: {
      title: 'Carrières chez Oui Lockers',
      subtitle: 'Rejoignez notre équipe et aidez à révolutionner le stockage de bagages.',
      whyJoin: 'Pourquoi nous rejoindre ?',
      whyJoinSubtitle: 'Faites partie d\'une startup en croissance au cœur de Paris',
      benefits: {
        health: {
          title: 'Avantages santé',
          description: 'Assurance santé complète et programmes de bien-être.',
        },
        flexibility: {
          title: 'Travail flexible',
          description: 'Options de télétravail et horaires de travail flexibles.',
        },
        growth: {
          title: 'Opportunités de croissance',
          description: 'Développement de carrière et programmes de formation.',
        },
      },
      openPositions: 'Postes vacants',
      positionsSubtitle: 'Trouvez votre prochain poste chez Oui Lockers',
      positions: {
        customerService: {
          title: 'Représentant du service client',
          department: 'Opérations',
          location: 'Paris, France',
          type: 'Temps plein',
        },
        operationsManager: {
          title: 'Responsable des opérations',
          department: 'Management',
          location: 'Paris, France',
          type: 'Temps plein',
        },
      },
      apply: 'Postuler',
      noPositions: 'Aucun poste vacant pour le moment. Revenez bientôt !',
      cta: {
        title: 'Vous ne trouvez pas le bon rôle ?',
        subtitle: 'Nous cherchons toujours des talents. Envoyez-nous votre CV !',
        button: 'Nous écrire',
      },
    },
    press: {
      title: 'Presse',
      subtitle: 'Dernières nouvelles, couverture médiatique et ressources presse.',
      pressKit: 'Dossier de presse',
      pressKitDescription: 'Téléchargez nos ressources de marque et supports médias.',
      brandAssets: 'Identité de marque',
      brandAssetsDesc: 'Logos, couleurs et directives de marque',
      factSheet: 'Fiche d\'entreprise',
      factSheetDesc: 'Présentation de l\'entreprise et faits clés',
      highResPhotos: 'Photos haute résolution',
      download: 'Télécharger',
      releasesTitle: 'Communiqués de presse',
      releases: {
        expansion: {
          date: 'Décembre 2024',
          title: 'Oui Lockers s\'étend à 5 nouveaux emplacements à Paris',
          excerpt: 'Le leader du stockage de bagages annonce une expansion rapide à travers la capitale française.',
        },
        partnership: {
          date: 'Octobre 2024',
          title: 'Oui Lockers s\'associe avec les grands hôtels',
          excerpt: 'De nouveaux partenariats rendent le stockage de bagages plus accessible pour les clients hôtel.',
        },
        award: {
          date: 'Août 2024',
          title: 'Oui Lockers gagne le prix de la meilleure innovation voyage',
          excerpt: 'Reconnaissance pour la révolution du stockage de bagages dans les villes européennes.',
        },
      },
      coverageTitle: 'Couverture médiatique',
      coverage: {
        figaro: {
          date: 'Novembre 2024',
          title: 'Comment Oui Lockers simplifie les voyages à Paris',
        },
        echos: {
          date: 'Septembre 2024',
          title: 'La startup qui révolutionne le stockage de bagages',
        },
        match: {
          date: 'Juillet 2024',
          title: 'La solution intelligente de Paris pour les voyageurs',
        },
      },
      readMore: 'Lire la suite',
      contactTitle: 'Contact presse',
      contactDescription: 'Pour toute demande médiatique, veuillez contacter notre équipe de presse.',
    },
  },
  es: {
    nav: {
      howItWorks: 'Cómo funciona',
      sizes: 'Tamaños y Precios',
      locations: 'Ubicaciones',
      faq: 'Preguntas Frecuentes',
      bookNow: 'Reservar ahora',
      language: 'Idioma',
      help: 'Ayuda',
    },
    hero: {
      headline: 'Taquillas de almacenamiento seguro, acceso instantáneo',
      subheadline: 'Deja tus maletas y vete. Alquila por hora, día o mes con nuestras taquillas inteligentes sin contacto. Acceso 24/7.',
      primaryCta: 'Encontrar una taquilla',
      secondaryText: 'Confiable para más de 1,000 usuarios.',
    },
    trust: {
      users: 'Confiable para 1,000+ usuarios',
      cctv: 'Monitoreo CCTV 24/7',
      ssl: 'Pagos SSL seguros',
    },
    features: {
      title: '¿Por qué elegir Oui Lockers?',
      noQueues: 'Sin filas',
      noQueuesDesc: 'Omite la fila. Reserva en línea y accede a tu taquilla instantáneamente con un código PIN.',
      flexible: 'Duración flexible',
      flexibleDesc: 'Alquila por hora, día o mes. Extiende tu alquiler en cualquier momento.',
      pinCode: 'Acceso con código PIN',
      pinCodeDesc: 'Entrada sin contacto segura. Tu código se envía instantáneamente a tu teléfono.',
      locations: 'Diversas ubicaciones',
      locationsDesc: 'Encuentra taquillas en ubicaciones convenientes en el centro de la ciudad en todo el mundo.',
    },
    howItWorks: {
      title: 'Cómo funciona',
      subtitle: 'Alquilar una taquilla inteligente es tan fácil como 1-2-3. Sin papeleo, sin filas.',
      step1: 'Reserva en línea',
      step1Desc: 'Selecciona tu ubicación, tamaño de taquilla y duración. Recibe confirmación instantánea y un código de acceso único.',
      step2: 'Deja y vete',
      step2Desc: 'Ingresa tu código de acceso en el teclado. La puerta se abre automáticamente. Coloca tus artículos dentro y cierra.',
      step3: 'Recupera cuando quieras',
      step3Desc: 'Ven y ve cuando quieras. Usa el mismo código para volver a abrir la taquilla. Cuando termines, simplemente cierra la puerta.',
    },
    sizes: {
      title: 'Elige el tamaño correcto',
      small: 'Pequeño',
      smallDesc: 'Ideal para mochilas, bolsos y pequeñas bolsas de compras.',
      smallPrice: 'Desde €5/día',
      medium: 'Mediano',
      mediumDesc: 'Cabe 1-2 maletas estándar o una bolsa de mano.',
      mediumPrice: 'Desde €8/día',
      large: 'Grande',
      largeDesc: 'Perfecto para equipos deportivos, palos de golf o 3+ maletas grandes.',
      largePrice: 'Desde €12/día',
      note: 'El precio final se calcula por duración en el motor de reservas.',
      bookNow: 'Reservar ahora',
    },
    testimonials: {
      title: 'Lo que dicen nuestros clientes',
      quote1: '¡Salvó mi viaje! Mi vuelo se retrasó y necesitaba un lugar para guardar mi equipaje durante 6 horas. Oui Lockers fue una salvación.',
      quote1Author: 'Sarah J. - Viajera',
      quote2: 'La forma más barata y fácil de guardar mis cosas durante las vacaciones de verano. Sin contrato necesario.',
      quote2Author: 'Marc D. - Estudiante',
      quote3: 'Uso la taquilla grande para mis palos de golf durante la semana. Muy conveniente.',
      quote3Author: 'Carlos R. - Local',
      quote4: '¡Guardamos nuestras maletas todo el día mientras explorábamos el Marais. El sistema PIN es genial — sin esperar al personal!',
      quote4Author: 'Michael T., USA',
      quote5: '¡Perfecto para nuestra estancia en París. Pudimos visitar el Louvre sin nuestras maletas. ¡Lo recomiendo mucho!',
      quote5Author: 'Claire D., Belgique',
      quote6: '¡Excelente servicio! Dejamos el equipaje aquí antes del check-in y exploramos la ciudad libremente. ¡Volveremos!',
      quote6Author: 'Marco R., Italia',
    },
    locations: {
      title: 'Encuentra una taquilla cerca de ti',
      subtitle: 'Elige entre nuestras convenientes ubicaciones en el centro de la ciudad',
      bookAtLocation: 'Reservar en esta ubicación',
      open: 'Abierto',
    },
    faq: {
      title: 'Preguntas Frecuentes',
      q1: '¿Cómo recibo mi código de acceso?',
      a1: 'Recibirás un código PIN de 6 dígitos por SMS y correo electrónico inmediatamente después de que se confirme tu reserva.',
      q2: '¿Puedo extender mi tiempo de alquiler?',
      a2: '¡Sí! Puedes extender tu alquiler a través del enlace en tu correo de confirmación o visitando nuevamente nuestro motor de reservas, siempre que la taquilla esté disponible.',
      q3: '¿Qué artículos están prohibidos?',
      a3: 'Por razones de seguridad, materiales inflamables, sustancias ilegales y alimentos perecederos no están permitidos en las taquillas.',
      q4: '¿Qué pasa si pierdo mi código?',
      a4: 'Contacta a nuestro equipo de soporte en help@ouilockers.com con tu ID de reserva. Podemos verificar tu identidad y reenviar tu código.',
      q5: '¿Hay un límite de tamaño para los artículos?',
      a5: 'Por favor verifica las dimensiones en nuestra página "Tamaños". Si tu artículo no cabe, la puerta de la taquilla no se cerrará y el sistema te alertará para elegir un tamaño más grande.',
    },
    cta: {
      headline: '¿Listo para liberar tus manos?',
      text: 'Encuentra una taquilla cerca de ti y reserva en segundos.',
      button: 'Ver ubicaciones',
    },
    footer: {
      brand: 'Oui Lockers',
      tagline: 'Almacenamiento inteligente para la vida moderna.',
      about: 'Nosotros',
      careers: 'Carreras',
      blog: 'Blog',
      press: 'Prensa',
      helpCenter: 'Centro de ayuda',
      terms: 'Términos de servicio',
      privacy: 'Política de privacidad',
      cookies: 'Política de cookies',
      contact: 'help@ouilockers.com',
      copyright: '© 2025 Oui Lockers. Todos los derechos reservados.',
      quickLinks: 'Enlaces Rápidos',
      support: 'Soporte',
      followUs: 'Síguenos',
      basedOnReviews: 'Basado en 250 reseñas',
    },
    newsletter: {
      title: 'Mantente Informado',
      subtitle: 'Recibe ofertas exclusivas y consejos de viaje por París en tu bandeja de entrada.',
      placeholder: 'Ingresa tu email',
      button: 'Suscribirse',
      success: '¡Gracias por suscribirte! 🎉',
      privacy: 'Sin spam, cancela cuando quieras.',
    },
    cookieConsent: {
      message: 'Usamos cookies para mejorar tu experiencia. Al continuar visitando este sitio, aceptas nuestro uso de cookies.',
      accept: 'Aceptar',
      decline: 'Rechazar',
      learnMore: 'Más información',
    },
    contactWidget: {
      callUs: 'Llámanos',
      whatsapp: 'WhatsApp',
      contact: 'Contacto',
    },
    promoBanner: {
      message: '🎉 ¡Usa el código **PARIS10** para un 10% de descuento en tu primera reserva!',
      copy: 'Copiar código',
      copied: '¡Copiado!',
      dismiss: 'Cerrar',
    },
    about: {
      title: 'Acerca de Oui Lockers',
      subtitle: 'Haciendo el almacenamiento de equipaje simple, seguro y accesible en París.',
      lockersStored: 'Equipajes almacenados',
      happyCustomers: 'Clientes satisfechos',
      rating: 'Valoración',
      locations: 'Ubicaciones',
      story: {
        title: 'Nuestra historia',
        paragraph1: 'Fundada en 2020, Oui Lockers comenzó con una misión simple: hacer que el almacenamiento de equipaje sea sin estrés para los viajeros que visitan París. Lo que comenzó como una sola ubicación cerca del Marais ha crecido en múltiples ubicaciones convenientes en toda la ciudad.',
        paragraph2: 'Hoy, continuamos innovando con taquillas inteligentes y sin contacto que dan a los viajeros la libertad de explorar París con las manos libres. Nuestro equipo está apasionado por el servicio al cliente y asegura que cada visitante tenga una experiencia perfecta.',
      },
      founded: 'Fundado en París',
      ourValues: 'Nuestros valores',
      valuesSubtitle: 'Lo que nos impulsa cada día',
      values: {
        security: {
          title: 'Seguridad primero',
          description: 'Tus pertenencias están seguras con nosotros. Todas las taquillas están monitoreadas 24/7 por CCTV y equipadas con sistemas de alarma individuales.',
        },
        convenience: {
          title: 'Máxima comodidad',
          description: 'Reserva en línea en segundos, accede a tu taquilla instantáneamente con un código PIN y disfruta de disponibilidad 24/7.',
        },
        location: {
          title: 'Ubicaciones privilegiadas',
          description: 'Nuestras taquillas están situadas en el corazón de París, facilitando dejar y recoger tu equipaje.',
        },
      },
      cta: {
        title: '¿Listo para explorar París?',
        subtitle: 'Encuentra una taquilla cerca de ti y comienza tu aventura.',
        button: 'Encontrar una taquilla',
      },
    },
    terms: {
      title: 'Términos de servicio',
      lastUpdated: 'Última actualización: enero 2025',
      section1: {
        title: '1. Aceptación de términos',
        content: 'Al acceder y usar los servicios de Oui Lockers, aceptas y acuerdas estar obligado por los términos y disposiciones de este acuerdo.',
      },
      section2: {
        title: '2. Descripción del servicio',
        content: 'Oui Lockers proporciona a los usuarios acceso a taquillas de almacenamiento seguro en varias ubicaciones en París. Los usuarios pueden alquilar taquillas por hora, día o mes.',
      },
      section3: {
        title: '3. Responsabilidades del usuario',
        content: 'Los usuarios son responsables de asegurar que sus pertenencias estén correctamente aseguradas y de mantener sus códigos de acceso. Los usuarios no deben almacenar artículos prohibidos.',
      },
      section4: {
        title: '4. Pago y precios',
        content: 'Todos los alquileres deben pagarse por adelantado. Los precios se calculan según la duración del alquiler y el tamaño de la taquilla seleccionada.',
      },
      section5: {
        title: '5. Limitación de responsabilidad',
        content: 'Oui Lockers no será responsable por cualquier pérdida o daño a los artículos almacenados, excepto cuando sea causado por nuestra negligencia.',
      },
      section6: {
        title: '6. Contáctenos',
        content: 'Si tienes alguna pregunta sobre estos Términos de Servicio, contáctanos en help@ouilockers.com.',
      },
    },
    privacy: {
      title: 'Política de privacidad',
      subtitle: 'Cómo protegemos y manejamos tus datos personales.',
      section1: {
        title: 'Información que recopilamos',
        content: 'Recopilamos información personal como tu nombre, correo electrónico, número de teléfono y datos de pago cuando realizas una reserva.',
      },
      section2: {
        title: 'Cómo usamos tu información',
        content: 'Tu información se usa para procesar reservas, proporcionar soporte al cliente y comunicarte sobre tus reservaciones.',
      },
      section3: {
        title: 'Protección de datos',
        content: 'Implementamos medidas de seguridad apropiadas para proteger tus datos personales contra acceso no autorizado, alteración, divulgación o destrucción.',
      },
      section4: {
        title: 'Tus derechos',
        content: 'Tienes derecho a acceder, corregir o eliminar tus datos personales. Contáctanos para ejercer estos derechos.',
      },
      section5: {
        title: 'Cambios a esta política',
        content: 'Podemos actualizar esta política de privacidad de vez en cuando. Cualquier cambio se publicará en esta página.',
      },
      contactTitle: 'Contáctanos',
      phone: 'Teléfono',
      address: 'Dirección',
    },
    cookies: {
      title: 'Política de cookies',
      subtitle: 'Entendiendo cómo usamos las cookies.',
      intro: 'Esta Política de Cookies explica qué son las Cookies y cómo Oui Lockers las usa. Al usar nuestro servicio, aceptas nuestro uso de cookies.',
      essential: {
        title: 'Cookies esenciales',
        description: 'Estas cookies son necesarias para que el sitio web funcione y no se pueden desactivar.',
        examples: ['Seguridad de sesión', 'Estado de inicio', 'Funcionalidad del carrito'],
      },
      functional: {
        title: 'Cookies funcionales',
        description: 'Estas cookies permiten funcionalidad y personalización mejoradas.',
        examples: ['Preferencias de idioma', 'Configuración de región'],
      },
      analytics: {
        title: 'Cookies analíticas',
        description: 'Estas cookies nos ayudan a entender cómo los visitantes interactúan con nuestro sitio web.',
        examples: ['Vistas de página', 'Fuentes de tráfico', 'Recorridos de usuario'],
      },
      manageTitle: 'Gestionando tus cookies',
      manageDescription: 'Puedes controlar o eliminar cookies a través de la configuración de tu navegador.',
      browserSettings: 'Configuración del navegador',
      cookieSettings: 'Configuración de cookies',
      thirdPartyTitle: 'Cookies de terceros',
      thirdPartyDescription: 'Podemos usar servicios de terceros que también establecen cookies en tu dispositivo.',
      updatesTitle: 'Actualizaciones a esta política',
      updatesDescription: 'Podemos actualizar esta política de vez en cuando. Por favor, revísala periódicamente.',
    },
    blog: {
      title: 'Blog',
      subtitle: 'Consejos, guías e historias sobre almacenamiento de equipaje y viajes a París.',
      categories: {
        all: 'Todo',
        tips: 'Consejos',
        locations: 'Ubicaciones',
        travel: 'Viaje',
      },
      posts: {
        guide: {
          title: 'La guía definitiva para almacenar equipaje en París',
          excerpt: 'Todo lo que necesitas saber sobre almacenar tu equipaje de forma segura mientras exploras la ciudad de la luz.',
          date: '15 ene. 2025',
          readTime: '5 min de lectura',
        },
        marais: {
          title: 'Mejores lugares para equipaje cerca del Marais',
          excerpt: 'Descubre las ubicaciones más convenientes para guardar tus bolsas mientras compras en el distrito del Marais.',
          date: '10 ene. 2025',
          readTime: '3 min de lectura',
        },
        tips: {
          title: '10 consejos para viajar ligero en París',
          excerpt: 'Aprende a hacer las maletas de manera inteligente y aprovechar al máximo tu viaje a París sin el equipaje pesado.',
          date: '5 ene. 2025',
          readTime: '4 min de lectura',
        },
      },
      readMore: 'Leer más',
      newsletter: {
        title: 'Recibe consejos de viaje',
        subtitle: 'Suscríbete a nuestro newsletter para ofertas exclusivas y consejos de viaje a París.',
        placeholder: 'Ingresa tu correo',
        button: 'Suscribirse',
      },
    },
    careers: {
      title: 'Carreras en Oui Lockers',
      subtitle: 'Únete a nuestro equipo y ayuda a revolucionar el almacenamiento de equipaje.',
      whyJoin: '¿Por qué unirse a nosotros?',
      whyJoinSubtitle: 'Sé parte de una startup en crecimiento en el corazón de París',
      benefits: {
        health: {
          title: 'Beneficios de salud',
          description: 'Seguro de salud integral y programas de bienestar.',
        },
        flexibility: {
          title: 'Trabajo flexible',
          description: 'Opciones de trabajo remoto y horarios laborales flexibles.',
        },
        growth: {
          title: 'Oportunidades de crecimiento',
          description: 'Desarrollo profesional y programas de formación.',
        },
      },
      openPositions: 'Posiciones abiertas',
      positionsSubtitle: 'Encuentra tu próximo rol en Oui Lockers',
      positions: {
        customerService: {
          title: 'Representante de servicio al cliente',
          department: 'Operaciones',
          location: 'París, Francia',
          type: 'Tiempo completo',
        },
        operationsManager: {
          title: 'Gerente de operaciones',
          department: 'Gestión',
          location: 'París, Francia',
          type: 'Tiempo completo',
        },
      },
      apply: 'Aplicar ahora',
      noPositions: 'No hay posiciones abiertas en este momento. ¡Vuelve pronto!',
      cta: {
        title: '¿No ves el rol adecuado?',
        subtitle: 'Siempre estamos buscando personas talentosas. ¡Envíanos tu CV!',
        button: 'Escríbenos',
      },
    },
    press: {
      title: 'Prensa',
      subtitle: 'Últimas noticias, cobertura mediática y recursos de prensa.',
      pressKit: 'Dossier de prensa',
      pressKitDescription: 'Descarga nuestros recursos de marca y materiales mediáticos.',
      brandAssets: 'Recursos de marca',
      brandAssetsDesc: 'Logos, colores y guía de marca',
      factSheet: 'Hoja de datos',
      factSheetDesc: 'Resumen de la empresa y datos clave',
      highResPhotos: 'Fotos de alta resolución',
      download: 'Descargar',
      releasesTitle: 'Comunicados de prensa',
      releases: {
        expansion: {
          date: 'Diciembre 2024',
          title: 'Oui Lockers se expande a 5 nuevas ubicaciones en París',
          excerpt: 'El servicio líder de almacenamiento de equipaje anuncia una rápida expansión por la capital francesa.',
        },
        partnership: {
          date: 'Octubre 2024',
          title: 'Oui Lockers se asocia con grandes hoteles',
          excerpt: 'Nuevas asociaciones hacen el almacenamiento de equipaje más accesible para los huéspedes de hoteles.',
        },
        award: {
          date: 'Agosto 2024',
          title: 'Oui Lockers gana el premio a la mejor innovación de viaje',
          excerpt: 'Reconocimiento por revolucionar el almacenamiento de equipaje en ciudades europeas.',
        },
      },
      coverageTitle: 'Cobertura mediática',
      coverage: {
        figaro: {
          date: 'Noviembre 2024',
          title: 'Cómo Oui Lockers está simplificando los viajes en París',
        },
        echos: {
          date: 'Septiembre 2024',
          title: 'La startup que revoluciona el almacenamiento de equipaje',
        },
        match: {
          date: 'Julio 2024',
          title: 'La solución inteligente de París para viajeros',
        },
      },
      readMore: 'Leer más',
      contactTitle: 'Contacto de prensa',
      contactDescription: 'Para consultas mediáticas, contacta a nuestro equipo de prensa.',
    },
  },
};
