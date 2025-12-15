// Central data store for the app
export const accordionData = [
  {
    title: "New in Two",
    content: "Oppurtunity to get a free phone every two years!",
  },
  {
    title: "Satalite Service",
    content: "Be connected anywhere, even in Space",
  },
  {
    title: "Achievements",
    content: "Officially partnered with Tesla",
  },
];

export const carouselData = [
  {
    image: "./images/iphone.webp",
    title: "IPhone 17 Series",
    description: "Free with Trade in of IPhone 11 or newer",
  },
  {
    image: "./images/samsung.webp",
    title: "Galaxy S25 Series",
    description: "4 Lines for $100",
  },
  {
    image: "./images/pixel.webp",
    title: "Google Pixel 10 Series",
    description: "Get $300 when you switch",
  },
];

export const products = [
  { id: 1, name: "iPhone 17", price: "$799", desc: "Latest iPhone with improved camera" },
  { id: 2, name: "Galaxy S25", price: "$699", desc: "High-performance Android flagship" },
  { id: 3, name: "Pixel 10", price: "$599", desc: "Clean Android experience with great camera" },
];

export const siteMeta = {
  footerTitle: 'J-Mobile. All rights reserved.',
  instaLink: 'https://twitter.com',
  twitterLink: 'https://www.instagram.com',
  followText: 'Follow J-Mobile on',
  linkColor: 'text-blue-400',
};

export const tiers = [
  {
    name: 'Hobby',
    id: 'tier-hobby',
    href: '#',
    priceMonthly: '$29',
    description: "The perfect plan if you're just getting started with our product.",
    features: ['25 products', 'Up to 10,000 subscribers', 'Advanced analytics', '24-hour support response time'],
    featured: false,
  },
  {
    name: 'Enterprise',
    id: 'tier-enterprise',
    href: '#',
    priceMonthly: '$99',
    description: 'Dedicated support and infrastructure for your company.',
    features: [
      'Unlimited products',
      'Unlimited subscribers',
      'Advanced analytics',
      'Dedicated support representative',
      'Marketing automations',
      'Custom integrations',
    ],
    featured: true,
  },
];
