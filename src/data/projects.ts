export interface Project {
  title: string
  year: string
  description: string
  image: string       // import path, e.g. '../assets/projects/stayify.png'
  link: string        // external URL or internal route
  tags?: string[]     // optional, not shown in card but useful later
}

export const projects: Project[] = [
  {
    title: 'Stayify',
    year: '2024',
    description: 'Short description placeholder — replace this with real content.',
    image: '../assets/projects/stayify.png',   // TODO: replace with real image import
    link: '#',                           // TODO: replace with real project URL
  },
  {
    title: 'CoreFlux',
    year: '2024',
    description: 'Short description placeholder — replace this with real content.',
    image: '/placeholder-project.png',   // TODO: replace with real image import
    link: '#',                           // TODO: replace with real project URL
  },
]
