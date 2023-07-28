import '../../styles/globals.css'
import { About } from "../../components/About/About";
import { Landing } from "../../components/Landing/Landing";
import { Footer } from "../../components/Layout/Footer";
import { HeadConfig } from "../../components/Layout/HeadConfig";
import { TechStack } from "../../components/TechStack/TechStack";

export async function getTechs() {
    const data = await fetch("http://localhost:3000/api/tech");
    return data.json()
  }
  
 
  export const metadata = {
    title: 'ThatLukaszGuy',
    themeColor: '#0f0f0f',
    description: "An interactive, modern Portfolio website showcasing the author's projects",
    author: 'ThatLukaszGuy',
    keywords: ['Portfolio', 'NextJS', 'Developer', 'Webdev', 'Fullstack'],
    icons: {
      icon:[{url: 'favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png'},{url: 'favicon/favicon-16x16.png',sizes: '16x16', type: 'image/png'}],
      other: [
        {rel: 'apple-touch-icon', url: 'favicon/apple-touch-icon.png', sizes: '180x180'},
        {rel: 'mask-icon', url: 'favicon/safari-pinned-tab.svg' ,color: '#5bbad5'}  ],
    
    },
    manifest: 'favicon/site.webmanifest'
  
  }

export default async function Home() {
    
    const tech = await getTechs()
    
    return (
      <>

        <Landing />
        <About />
        <TechStack tech={tech}/>
        <Footer />
      </>
    )
  }
  