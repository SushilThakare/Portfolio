import stayifyImg from '../assets/projects/styify.png'
import restfulImg from '../assets/projects/RESTful-Content-Platform.png'
import repotriageImg from '../assets/projects/repotriage.png'

export interface Project {
  title: string
  description: string
  image: string       // imported image path or public URL
  link: string        // external URL or internal route
  year?: string       // optional project year
  tags?: string[]     // optional, not shown in card but useful later
}

export const projects: Project[] = [

  {
    title: 'RepoTriage',
    description: 'An autonomous LangChain agent that reads a GitHub repository like a new contributor would, fetches the README, checks open issues, and tells you exactly what to work on next' ,
    image: repotriageImg,
    link: 'https://github.com/SushilThakare/RepoTriage',
  },

  {
    title: 'Stayify',
    description: 'A full-stack accommodation listing platform where users can browse, list, and manage stays. Built with Express and EJS for server-side rendering, MongoDB for data persistence, and Passport.js for authentication.',
    image: stayifyImg,
    link: 'https://github.com/SushilThakare/Stayify',
  },
  {
    title: 'RESTful Content Platform',
    description: 'A server-rendered CRUD app for managing posts in a global feed, built to demonstrate clean REST API design with Express. Uses UUIDs for collision-free post IDs and method-override middleware to support PATCH/DELETE from plain HTML forms.',
    image: restfulImg,
    link: 'https://github.com/SushilThakare/RESTful-Content-Platform',
  },
  
  

]


