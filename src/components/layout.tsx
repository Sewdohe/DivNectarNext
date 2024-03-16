import React from "react"
import { Providers } from "../providers";
import NavBar from "../components/navbar"

//@ts-ignore
export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <main style={{ minHeight: '100vh', backgroundImage: "url('/background.webp')"}} className="dark text-foreground bg-background">
      <Providers>
        <NavBar />
          {children}
      </Providers>
    </main>
  )
}