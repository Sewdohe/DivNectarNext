import * as React from "react"
import { Link, type HeadFC, type PageProps } from "gatsby"
import { Providers } from "../providers";
// import {NextUIProvider} from "@nextui-org/system";
import Layout from "../components/layout";
import ServerStatus from "../components/server-status";
import PaddedContainer from "../components/building-blocks/PaddedContainer";
import P from "../components/building-blocks/Paragraph";
import CTA from "../components/building-blocks/CTA";
import SEO from "../components/SEO";
import ScreenShotHero from "../components/building-blocks/ScreenshotHero";


const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center">
        <h1 className="text-2xl md:text-6xl text-sky font-extrabold">DivNectar Home</h1>
        <P>
          Welcome!
        </P>
        <P>This is my simple abode. I plan to flesh the site out and make it more interactive in the near future. As for now, you
          can basically just check the status of both my Minecraft servers <Link to="/servers">here.</Link>
        </P>
      </div>
      <ScreenShotHero />
    </Layout>
  )
}

export default IndexPage

export const Head = () => (
  <SEO title="DivNectar Home" description="Sewdohe's humble digital abode" />
)
