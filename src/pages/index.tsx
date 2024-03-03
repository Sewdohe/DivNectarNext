import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import {Providers} from "../providers";
import NavBar from "../components/navbar"
// import {NextUIProvider} from "@nextui-org/system";
import Layout from "../components/layout";


const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Providers>
        <main style={{ height: "100vh"}} className="dark text-foreground bg-background">
          <NavBar />
        </main>
      </Providers>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
