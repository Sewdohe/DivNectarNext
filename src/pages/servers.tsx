import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import NavBar from "../components/navbar"
// import {NextUIProvider} from "@nextui-org/system";
import Layout from "../components/layout";
import ServerStatus from "../components/ServerStatus";
import SEO from "../components/Seo";


const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div className="flex flex-wrap rounded-xl mx-1 md:mx-20 py-8 justify-center mt-10 bg-gradient-to-r from-violet-500 to-fuchsia-500">
        <ServerStatus pageLink="/servers/forge" title="CraftNectarMMO (forge)" connectionUrl="craftnectar.divnectar.com" uri="craft.divnectar.com" />
        <ServerStatus pageLink="/servers/purpur" title="CraftNectar Purpur (vanilla)" connectionUrl="divnectar.com" uri="divnectar.com" />
      </div>
    </Layout>
  )
}

export default IndexPage

export const Head = () => (
  <SEO title="DivNectar Servers" description="View server status for DivNectar game servers" />
)
