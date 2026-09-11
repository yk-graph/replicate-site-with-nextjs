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
    links: ['Developers/API', 'Unsplash Dataset', 'License'],
  },
  {
    title: 'Community',
    links: ['Become a Contributor', 'Topics', 'Collections', 'Trends'],
  },
  {
    title: 'Explore',
    links: ['Wallpapers', 'Backgrounds', 'Images', 'Photos'],
  },
  {
    title: 'Legal',
    links: ['Privacy Policy', 'Terms', 'Cookie Policy'],
  },
]

export const FOOTER_SECTIONS: MenuSection[] = MENU_SECTIONS
