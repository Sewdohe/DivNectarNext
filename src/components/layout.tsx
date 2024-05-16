import React from "react"
import { Providers } from "../providers";
import NavBar from "../components/navbar"
// import Swup from 'swup';
//@ts-ignore
// import SwupSlideTheme from '@swup/slide-theme';


//@ts-ignore
export default function Layout({ children }: React.PropsWithChildren) {
  // const swup = new Swup({
  //   plugins: [new SwupSlideTheme()]
  // });
  return (
    <main style={{ minHeight: '100vh', backgroundImage: "url('/background.webp')"}} id="swup" className="dark text-foreground bg-background">
      <Providers>
        <NavBar />
          <div>
            {children}
          </div>
      </Providers>
    </main>
  )
}