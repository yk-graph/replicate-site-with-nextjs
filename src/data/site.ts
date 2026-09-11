export const HERO_CONTENT = {
  title: 'Unsplash',
  subtitle: "The internet's source for visuals. Powered by creators everywhere.",
}

export const SEARCH_PLACEHOLDER = 'Search photos and illustrations'

export type MenuSection = {
  title: string
  links: string[]
}

export const MENU_SECTIONS: MenuSection[] = [
  {
    title: 'Company',
    links: ['About', 'Advertise', 'History', 'Join the team', 'Blog', 'Press', 'Contact us', 'Help Center'],
  },
  {
    title: 'Product',
    links: [
      'Developers/API',
      'Unsplash Dataset',
      'Unsplash for iOS',
      'Apps & Plugins',
      'Unsplash Studio',
      'Product Placement Ads',
    ],
  },
  {
    title: 'Community',
    links: ['Become a Contributor', 'Collections', 'Trends', 'Unsplash Awards', 'Stats'],
  },
]

export const LEGAL_LINKS = ['License', 'Privacy Policy', 'Terms', 'Security']

export const FOOTER_SECTIONS: MenuSection[] = [...MENU_SECTIONS, { title: 'Legal', links: LEGAL_LINKS }]
