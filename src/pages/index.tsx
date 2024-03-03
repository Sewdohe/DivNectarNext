import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import {Providers} from "../providers";
import NavBar from "../components/navbar"
// import {NextUIProvider} from "@nextui-org/system";


const IndexPage: React.FC<PageProps> = () => {
  return (
    <Providers>
      <main style={{ height: "100vh"}} className="dark text-foreground bg-background">
        <NavBar />
      </main>
    </Providers>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
