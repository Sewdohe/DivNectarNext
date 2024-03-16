import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Providers } from "../providers";
// import {NextUIProvider} from "@nextui-org/system";
import Layout from "../components/layout";
import ServerStatus from "../components/server-status";


const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
