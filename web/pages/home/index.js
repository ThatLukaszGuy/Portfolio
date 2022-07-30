import { About } from "../../components/About/About";
import { Landing } from "../../components/Landing/Landing";
import { Footer } from "../../components/Layout/Footer";
import { HeadConfig } from "../../components/Layout/HeadConfig";
import { TechStack } from "../../components/TechStack/TechStack";
import DB from "../../utils/DB";
import Techs from "../../models/techModel";

export async function getServerSideProps() {
  
  await DB();

  const data = await Techs.find({});
  return {
    props: {tech : JSON.parse(JSON.stringify(data))}
  }

}

export default function Home({ tech }) {

  return (
    <>
      <HeadConfig title={'ThatLukaszGuy'} color={"#0f0f0f"} />
      <Landing />
      <About />
      <TechStack tech={tech}/>
      <Footer />
    </>
  )
}
