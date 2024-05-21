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


const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <PaddedContainer>
        <h1 className="text-2xl font-extrabold">DivNectar Home</h1>
        <P>
          Welcome!
        </P>
        <P>This is my simple abode. I plan to flesh the site out and make it more interactive in the near future. As for now, you
          can basically just check the status of both my Minecraft servers <Link to="/servers">here.</Link>
        </P>
        <img className="w-full dark:hidden" src={'/discord.png'} alt="discord logo" />
        <CTA></CTA>
      </PaddedContainer>
    </Layout>
  )
}

export default IndexPage

export const Head = () => (
  <SEO title="DivNectar Home" description="Sewdohe's humble digital abode" />
)
