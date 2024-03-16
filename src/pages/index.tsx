import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Providers } from "../providers";
import NavBar from "../components/navbar"
// import {NextUIProvider} from "@nextui-org/system";
import Layout from "../components/layout";
import ServerStatus from "../components/server-status";


const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Providers>
        <main style={{ height: "100vh" }} className="dark text-foreground bg-background">
          <NavBar />
          <div className="flex flex-wrap rounded-md mx-20 py-8 justify-center mt-10 bg-gradient-to-r from-violet-500 to-fuchsia-500">
            <ServerStatus uri="craft.divnectar.com" />
            <ServerStatus uri="divnectar.com" />
          </div>
        </main>
      </Providers>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
