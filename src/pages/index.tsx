import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Providers } from "../providers";
// import {NextUIProvider} from "@nextui-org/system";
import Layout from "../components/layout";
import ServerStatus from "../components/server-status";


const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <h1 className="sm:text-3xl text-7xl text-center font-extrabold bg-gradient-to-r from-cyan-300 to-violet-700 bg-clip-text text-transparent">&lt;DivNectar/&gt;</h1>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
