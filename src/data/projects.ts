import stayifyImg from '../assets/projects/styify.png'
import restfulImg from '../assets/projects/RESTful-Content-Platform.png'

export interface Project {
  title: string
  year: string
  description: string
  image: string       // imported image path or public URL
  link: string        // external URL or internal route
  tags?: string[]     // optional, not shown in card but useful later
}

export const projects: Project[] = [
  {
    title: 'Stayify',
    year: '2024',
    description: 'A full-stack accommodation listing platform where users can browse, list, and manage stays. Built with Express and EJS for server-side rendering, MongoDB for data persistence, and Passport.js for authentication.',
    image: stayifyImg,
    link: '#',
  },
  {
    title: 'RESTful Content Platform',
    year: '2024',
    description: 'A server-rendered CRUD app for managing posts in a global feed, built to demonstrate clean REST API design with Express. Uses UUIDs for collision-free post IDs and method-override middleware to support PATCH/DELETE from plain HTML forms.',
    image: restfulImg,
    link: '#',
  },
]

