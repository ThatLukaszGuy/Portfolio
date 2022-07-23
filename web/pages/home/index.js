import { About } from "../../components/About/About";
import { Landing } from "../../components/Landing/Landing";
import { Footer } from "../../components/Layout/Footer";
import { HeadConfig } from "../../components/Layout/HeadConfig";
import { TechStack } from "../../components/TechStack/TechStack";

export async function getStaticProps() {
  const req = await fetch('http://localhost:3000/api/tech')
  const data = await req.json()
  return {
    props: {tech : data}
  }

}

export default function Home({ tech }) {

  return (
    <>
      <HeadConfig title={'ThatLukaszGuy'}/>
      <Landing />
      <About />
      <TechStack tech={tech}/>
      <Footer />
    </>
  )
}
